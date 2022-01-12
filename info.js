let users =
  `[
    {
       "Name": "Johny",
       "Age" :  33,
       "Profession" : "Programmer",
       "Hobbies" : ["Walking", "Gaming", "Reading"]
    },
    {
      "Name": "Lena",
      "Age": 24,
      "Profession": "Dentist",
      "Hobbies" :["Hiking", "Poetry", "Watching TV"]
  },
  {
    "Name": "Hans",
    "Age" : 43,
    "Profession": "Electrician",
    "Hobbies":["Football", "Watching TV", "Making love", "Snooker"]
   },
   {
   "Name": "Sergey",
   "Age" : 19,
   "Profession": "Student",
   "Hobbies":["Gaming","Reading","Sports", "Gym"]
   }
  ]`

  console.log(JSON.parse(users))