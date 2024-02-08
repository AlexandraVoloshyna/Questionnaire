
Вхідні параметри:
```json
[
  {
    "question": "What is your marital status?",
    "options": ["Single", "Married"],
    "next": {
      "Single": {
        "question": "Are you planning on getting married next year?",
        "options": ["Yes", "No"],
        "next": null
      },
      "Married": {
        "question": "How long have you been married?",
        "options": ["Less than a year", "More than a year"],
        "next": {
          "Less than a year": null,
          "More than a year": {
            "question": "Have you celebrated your one year anniversary?",
            "options": ["Yes", "No"],
            "next": null
          }
        }
      }
    }
  }
]
```

Вихідні дані:
JSON об’єкт, що є результатом роботи скрипту тестування, з інформацією про кількість всіх
можливих шляхів опитувань (paths.number), та всіма можливими послідовностями
запитань з відповідями (paths.list):
```json
{"paths": {"number": 3, "list": [
[{"What is your marital status?": "Single"},
{"Are you planning on getting married next year?": "Yes/No"}],
[{"What is your marital status?": "Married"},
{"How long have you been married?": "Less than a year"}],
[{"What is your marital status?": "Married"},
{"How long have you been married?": "More than a year"},
{"Have you celebrated your one year anniversary?": "Yes/No"}],
]}}
```
