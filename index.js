/* Your Code Here */
const createEmployeeRecord = (employeeInfo) => {
    const [employeeFirstName, employeeFamilyName, employeeTitle, pay] = employeeInfo;

    const employeeRecord = {
        firstName: employeeInfo[0],
        familyName: employeeInfo[1],
        title: employeeInfo[2],
        payPerHour: employeeInfo[3],
        timeInEvents: [],
        timeOutEvents: []
    }
        return employeeRecord;
}

const createEmployeeRecords = (employeesArr) => {
   return employeesArr.map(record => createEmployeeRecord(record))
}


const createTimeInEvent = function (dateStamp) {
   const [date, hour] = dateStamp.split(" "); 

   const timeIn = { 
        type: "TimeIn",
        hour: parseInt(hour, 10),       
        date: date
    }
    this.timeInEvents.push(timeIn)
    return this; 
}


const createTimeOutEvent = function (dateStamp) {
    const [date, hour] = dateStamp.split(' ');

    const timeOut = { 
         type: "TimeOut",
         hour: parseInt(hour, 10),       
         date: date
     }
     this.timeOutEvents.push(timeOut)
     return this; 
 }


const hoursWorkedOnDate = function (targetDate) {
    const inEvent = this.timeInEvents.find(inEvent => inEvent.date === targetDate)
    const outEvent = this.timeOutEvents.find(outEvent => outEvent.date === targetDate)

        return (outEvent.hour - inEvent.hour)/100 
}


const wagesEarnedOnDate = function (targetDate) {
    
    return hoursWorkedOnDate.call(this, targetDate) * this.payPerHour;
 }

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


const findEmployeeByFirstName = function (srcArray, firstName) {

    return srcArray.find(oneRecord => oneRecord.firstName === firstName);
   }


const calculatePayroll = function (empRecordsArr) {
   return empRecordsArr.reduce(function (total, rec) {
       return total + allWagesFor.call(rec)
   }, 0)
}
