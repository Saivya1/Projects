import customtkinter


class GUI(customtkinter.CTk):
    def __init__(self):
        super().__init__()

        self.title("Calculator")
        self.geometry("400x600")

        # Main window grid
        self.grid_columnconfigure(0, weight=1)
        self.grid_rowconfigure(0, weight=1)
        self.grid_rowconfigure(1, weight=3)

        # Frames
        self.display_frame = customtkinter.CTkFrame(master=self)
        self.buttons_frame = customtkinter.CTkFrame(master=self)

        self.display_frame.grid(row=0, column=0, sticky="nsew")
        self.buttons_frame.grid(row=1, column=0, sticky="nsew")

        # Display
        self.display_frame.grid_columnconfigure(0, weight=1)
        self.display = customtkinter.CTkLabel(
            master=self.display_frame,
            text="",
            width=200,
            height=100,
            anchor="e",
        )
        self.display.grid(row=0, column=0, sticky="ew", padx=10, pady=1)

        # Buttons 4x4 grid
        self.buttons_frame.grid_columnconfigure((0, 1, 2, 3), weight=1)
        self.buttons_frame.grid_rowconfigure((0, 1, 2, 3), weight=1)

        buttons = [
            ["7", "8", "9", "/"],
            ["4", "5", "6", "*"],
            ["1", "2", "3", "-"],
            ["0", ".", "=", "+"],
        ]

        for i in range(4):
            for j in range(4):
                button = customtkinter.CTkButton(
                    master=self.buttons_frame,
                    text=buttons[i][j],
                    command=lambda action=buttons[i][j]: self.button_callbck(action),
                    hover_color="lightblue",
                )

                button.grid(row=i, column=j, sticky="nsew", padx=5, pady=5)

    def button_callbck(self, action: str) -> None:
        print(f"button clicked : {action}")

        curr_str = self.display.cget("text")

        # Invalid expression error
        if curr_str and curr_str[-1] in "-=+/*." and action in "-=+/*.":
            print(f"curr str : {curr_str}")
            self.display.configure(text="Invalid expression, try again")
            self.after(3000, lambda: self.display.configure(text=""))
            return

        curr_str += action

        if action == "=":
            curr_str = curr_str[:-1]
            res = self.calculate_res(curr_str)
            self.display.configure(text=f"{res}")
        else:
            self.display.configure(text=f"{curr_str}")

    def calculate_res(self, curr_str: str) -> float:
        # 123.23 + 32
        # 12+34
        operations = []
        nums = []
        num = ""

        for i in range(len(curr_str)):
            if curr_str[i].isdigit() or curr_str[i] == ".":
                num += curr_str[i]
            else:
                nums.append(float(num))
                num = ""
                operations.append(curr_str[i])
        nums.append(float(num))

        i = 0
        while i < len(operations):
            if operations[i] == "*":
                res = nums[i] * nums[i + 1]
                nums[i] = res
                nums.pop(i + 1)
                operations.pop(i)
            elif operations[i] == "/":
                res = nums[i] / nums[i + 1]
                nums[i] = res
                nums.pop(i + 1)
                operations.pop(i)
            else:
                i += 1

        # Handle + and -
        result = nums[0]

        for i in range(len(operations)):
            if operations[i] == "+":
                result += nums[i + 1]

            elif operations[i] == "-":
                result -= nums[i + 1]

        return result
        # try:
        #     # eval() naturally follows standard mathematical operator precedence
        #     # Restricting globals/locals for basic safety
        #     result = eval(curr_str, {"__builtins__": {}}, {})
        #     print(f"Result: {result}\n")
        #     return result
        # except ZeroDivisionError:
        #     print("Error: Division by zero is not allowed.\n")
        # except Exception as e:
        #     print(f"Invalid expression. Please try again. (Error: {e})\n")


app = GUI()
app.mainloop()
