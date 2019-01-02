const emplSchema = {
                       "type": "object",
                       "properties": {
                         "EmployeeMasterPersonal": {
                           "title" : "Employee Personal Details",
                           "$ref" : "#/definitions/EmployeeDetails"
                         },
                         "EmployeeMasterBank": {
                           "title": "Employee Bank Details",
                           "$ref": "#/definitions/EmployeeBankDetails"
                         },
                         "EmployeeIdentificationDetails": {
                           "title": "Employee Identification Details",
                           "$ref": "#/definitions/EmployeeIdenDetails"
                         },
                         "EmployeeOfficeDetails": {
                           "title": "Employee Office Details",
                           "$ref": "#/definitions/EmployeeOffiDetails"
                         }
                       },
                     "additionalProperties": false,
                       "definitions": {
                         "EmployeeDetails": {
                           "type": "object",
                           "properties": {
                             "id": {
                               "type": "string",
                               "title": "Employee Code"
                             },
                             "Title": {
                               "type": "string",
                               "enum": [
                                 "Mr.",
                                 "Miss.",
                                 "Dr.",
                                 "Ms."
                               ]
                             },
                             "EmployeeFirstName": {
                               "type": "string",
                               "title": "Employee First Name"
                             },
                             "EmployeeMiddleName": {
                               "type": "string",
                               "title": "Employee Middle Name"
                             },
                             "EmployeeLastName": {
                               "type": "string",
                               "title": "Employee Last Name"
                             },
                             "EmployeeSurrName": {
                               "type": "string",
                               "title": "Employee Surname"
                             },
                             "EmployeeNationalLanguage": {
                               "type": "string",
                               "title": "National Language"
                             },
                             "EmployeeDOB": {
                               "type": "string",
                               "title": "Date of Birth",
                               "format": "date"
                             },
                             "EmployeeDOC": {
                               "type": "string",
                               "title": "Date of Confirmation",
                               "format": "date"
                             },
                             "EmployeeDOJ": {
                               "type": "string",
                               "title": "Date of Joining",
                               "format": "date"
                             },
                             "EmployeeBloodGroup": {
                               "type": "string",
                               "title": "Blood Group",
                               "enum": [
                                 "A+",
                                 "A-",
                                 "B+",
                                 "B-",
                                 "AB+",
                                 "AB-",
                                 "O+",
                                 "O-"
                               ]
                             }
                           },
                           "additionalProperties": false,
                           "additionalItems" : false,
                           "required" : ["id"]
                         },
                         "EmployeeBankDetails": {
                           "type": "object",
                           "properties": {
                             "AccountNumber": {
                               "type": "string",
                               "title": "Employee Account Number"
                             },
                             "BankCode": {
                               "type": "string",
                               "title": "Bank Name"
                             },
                             "BranchCode": {
                               "type": "string",
                               "title": "Branch Name"
                             },
                             "LocationCode": {
                               "type": "string",
                               "title": "Location"
                             }
                           },
                           "required" : ["AccountNumber","BankCode","BranchCode","LocationCode"]
                         },
                         "EmployeeIdenDetails": {
                           "type": "object",
                           "properties": {
                             "IDtype": {
                               "type": "string",
                               "title": "Identification Type",
                               "enum": [
                                 "PAN",
                                 "Voter ID",
                                 "Aadhar"
                               ]
                             },
                             "IDtypeDetails": {
                               "type": "string",
                               "title": "Identification Type Details"
                             },
                             "Employee ID Number": {
                               "type": "string",
                               "title": "Employee ID Number"
                             }
                           }
                         },
                         "EmployeeOffiDetails": {
                           "type": "object",
                           "properties": {
                             "EmployeeStatus": {
                               "type": "string",
                               "title": "Status",
                               "enum": [
                                 "Active",
                                 "Resign",
                                 "Hold"
                               ]
                             },
                             "EmployeeEmailID": {
                               "type": "string",
                               "title": "Email Address",
                               "format": "email"
                             },
                             "EmployeeDepartment": {
                               "type": "string",
                               "title": "Department"
                             },
                             "EmployeeDesigantion": {
                               "type": "string",
                               "title": "Designation"
                             },
                             "EmployeeGrade": {
                               "type": "string",
                               "title": "Grade"
                             },
                             "EmployeeLocation": {
                               "type": "string",
                               "title": "Location"
                             },
                             "EmploymentType": {
                               "type": "string",
                               "title": "Employment Type",
                               "enum": [
                                 "Permanent",
                                 "Interm",
                                 "Probationary"
                               ]
                             },
                             "Currency": {
                               "type": "string",
                               "title": "Currency",
                               "enum": [
                                 "Rupee",
                                 "Yan",
                                 "Dollar"
                               ]
                             },
                             "SupervisiorNumber": {
                               "type": "number",
                               "title": "Supervisior Number"
                             }
                           }
                         }
                       }
                     }

export default emplSchema;