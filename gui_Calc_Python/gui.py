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
            text="test display",
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

    def button_callbck(self, action):
        print(f"button clicked : {action}")


app = GUI()
app.mainloop()
