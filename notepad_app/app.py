import customtkinter as ctk

#
# ┌──────────────────────────────────────────────────────────────┐
# │  Notes                                      [+ New Note]      │
# ├──────────────────┬───────────────────────────────────────────┤
# │                  │                                           │
# │  Search...       │  My first note                            │
# │                  │                                           │
# │  My first note   │  ───────────────────────────────────────  │
# │  Shopping list   │                                           │
# │  Project ideas   │  This is my first note.                   │
# │  DSA notes       │                                           │
# │                  │  I can write whatever I want here.        │
# │                  │                                           │
# │                  │                                           │
# │                  │                                           │
# │                  │                                           │
# │                  │                                           │
# │                  │                                           │
# │                  │                                           │
# │                  │                                           │
# │                  │                                           │
# │                  │                                           │
# │                  │                                           │
# ├──────────────────┴───────────────────────────────────────────┤
# │  4 notes                                      Delete Note 🗑  │
# └──────────────────────────────────────────────────────────────┘


class HeaderFrame(ctk.CTkFrame):
    def __init__(self, master):
        super().__init__(master)
        self.grid_columnconfigure(
            0,
            weight=1,
        )
        self.grid_columnconfigure(1, weight=1)

        self.label1 = ctk.CTkLabel(
            self, text="test", anchor="w", font=("Times New Roman", 25)
        )
        self.label1.grid(row=0, column=0, padx=10, pady=(10, 10), sticky="ew")

        self.label2 = ctk.CTkLabel(
            self, text="test2", anchor="e", font=("Times New Roman", 25)
        )
        self.label2.grid(row=0, column=1, padx=10, pady=(10, 10), sticky="ew")


class LeftFrame(ctk.CTkFrame):
    def __init__(self, master):
        super().__init__(master)
        self.grid_rowconfigure(0, weight=1)
        self.grid_columnconfigure(0, weight=1)

        self.label1 = ctk.CTkLabel(
            self, text="test", anchor="w", font=("Times New Roman", 25)
        )
        self.label1.grid(row=0, column=0, padx=10, pady=(10, 10), sticky="ew")


class RightFrame(ctk.CTkFrame):
    def __init__(self, master):
        super().__init__(master)
        self.grid_rowconfigure(0, weight=1)
        self.grid_columnconfigure(0, weight=1)
        self.label2 = ctk.CTkLabel(
            self, text="test2", anchor="e", font=("Times New Roman", 25)
        )
        self.label2.grid(row=0, column=0, padx=10, pady=(10, 10), sticky="ew")


class BodyFrame(ctk.CTkFrame):
    def __init__(self, master):
        super().__init__(master)

        self.grid_columnconfigure(0, weight=1)
        self.grid_columnconfigure(1, weight=2)

        self.left_frame = LeftFrame(self)
        self.right_frame = RightFrame(self)

        self.left_frame.grid(row=0, column=0)
        self.right_frame.grid(row=0, column=1)


class FooterFrame(ctk.CTkFrame):
    def __init__(self, master):
        super().__init__(master)

        self.grid_columnconfigure(0, weight=1)
        self.grid_columnconfigure(1, weight=1)

        self.label1 = ctk.CTkLabel(
            self, text="test", anchor="w", font=("Times New Roman", 25)
        )
        self.label1.grid(row=0, column=0, padx=10, pady=(10, 10), sticky="ew")
        self.label2 = ctk.CTkLabel(
            self, text="test2", anchor="e", font=("Times New Roman", 25)
        )
        self.label2.grid(row=0, column=1, padx=10, pady=(10, 10), sticky="ew")


class App(ctk.CTk):
    def __init__(self):
        super().__init__()
        self.geometry("400x750")
        self.grid_rowconfigure(1, weight=2)
        self.grid_columnconfigure(0, weight=1)

        self.header_frame = HeaderFrame(self)
        self.body_frame = BodyFrame(self)
        self.footer_frame = FooterFrame(self)

        self.header_frame.grid(row=0, sticky="ew")
        self.body_frame.grid(row=1, sticky="nsew")
        self.footer_frame.grid(row=2, sticky="ew")

        self.button = ctk.CTkButton(self, text="my button", command=self.button_callbck)

        self.title("Note App")

    def button_callbck(self):
        print("button clicked")


app = App()
app.mainloop()
