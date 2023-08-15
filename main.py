from fastapi import FastAPI

app = FastAPI()

@app.get("/calculate")
def calculate(operation: str, num1: float, num2: float):
    if operation == "+":
        result = num1 + num2
    elif operation == "-":
        result = num1 - num2
    elif operation == "*":
        result = num1 * num2
    elif operation == "/":
        result = num1 / num2
    else:
        return {"error": "Invalid operation"}
    
    return {"result": result}
