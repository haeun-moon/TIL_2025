import openpyxl as op

# wb = op.Workbook()

# print(wb)

# wb.save("test001.xlsx")

wb = op.load_workbook("test001.xlsx")

print(wb)