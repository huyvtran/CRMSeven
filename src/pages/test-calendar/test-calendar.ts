import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoogleCalendarProvider } from '../../providers/google-calendar/google-calendar';

/**
 * Generated class for the TestCalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test-calendar',
  templateUrl: 'test-calendar.html',
})
export class TestCalendarPage {

  constructor(public auth: GoogleCalendarProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestCalendarPage');
  }

}





// declare var gapi: any;
// import { Component } from "@angular/core";
// import { IonicPage, NavController, NavParams } from "ionic-angular";
// import {
//   InAppBrowser,
//   InAppBrowserEvent,
//   InAppBrowserOptions,
// } from "@ionic-native/in-app-browser";
// interface BrowserEvent extends InAppBrowserEvent {}
// // interface BrowserRef extends InAppBrowserRef{
// //   addEventListener(type: string, callback: (event: InAppBrowserEvent) => void): any;
// // }

// @IonicPage()
// @Component({
//   selector: "page-test-calendar",
//   templateUrl: "test-calendar.html",
// })
// export class TestCalendarPage {
//   constructor(private app: InAppBrowser) {}

//   // ionViewDidLoad() {
//   //   console.log('ionViewDidLoad TestCalendarPage');
//   // }
//   calendarEvent: any = {};

//   attendees = [
//     {
//       email: "",
//     },
//   ];

//   validation: any = {};

//   CLIENT_ID =
//     "933058478038-4kbs5heipcs0asi984gb75nr39pv1fgp.apps.googleusercontent.com";
//   SCOPES = ["https://www.googleapis.com/auth/calendar"];
//   APIKEY = "AIzaSyBZVATUD306jdCUjl1E_odvGjBnEy7fK6k";
//   REDIRECTURL = "http://localhost:8100";

//   sendInvite() {
//     if (!this.validate()) {
//       alert("Please fill all fields for sending invite.");
//       return;
//     }
//     this.validation.failure = false;
//     var startDateTimeISO = this.buildISODate(
//       this.calendarEvent.startDate,
//       this.calendarEvent.startTime
//     );
//     var enddateTimeISO = this.buildISODate(
//       this.calendarEvent.endDate,
//       this.calendarEvent.endTime
//     );
//     this.popLastAttendeeIfEmpty(this.attendees);
//     var browserRef = this.app.create(
//       "https://accounts.google.com/o/oauth2/auth?client_id=" +
//         this.CLIENT_ID +
//         "&redirect_uri=" +
//         this.REDIRECTURL +
//         "&scope=https://www.googleapis.com/auth/calendar&approval_prompt=force&response_type=token",
//       "_blank",
//       "location=no"
//     );
//     browserRef.on("loadstart").subscribe((event) => {
//       if (event["url"].indexOf("http://localhost/callback") === 0) {
//         var url = event["url"];
//         var token = url.split("access_token=")[1].split("&token_type")[0];
//         browserRef.on("exit").subscribe(() => {});
//         browserRef.close();

//         //Sending the google calendar invite from the google api
//         gapi.client.setApiKey(this.APIKEY);
//         var request = gapi.client.request({
//           path: "/calendar/v3/calendars/primary/events?alt=json",
//           method: "POST",
//           headers: {
//             Authorization: "Bearer " + token,
//           },
//           body: JSON.stringify({
//             summary: this.calendarEvent.name,
//             location: this.calendarEvent.location,
//             description: this.calendarEvent.description,
//             start: {
//               dateTime: startDateTimeISO,
//               timeZone: "Asia/Kolkata",
//             },
//             end: {
//               dateTime: enddateTimeISO,
//               timeZone: "Asia/Kolkata", // TODO : Parameterize this timezone
//             },
//             recurrence: ["RRULE:FREQ=DAILY;COUNT=1"],
//             attendees: this.attendees,
//             reminders: {
//               useDefault: false,
//               overrides: [
//                 {
//                   method: "email",
//                   minutes: 1440,
//                 },
//                 {
//                   method: "popup",
//                   minutes: 10,
//                 },
//               ],
//             },
//           }),
//           callback: function (jsonR, rawR) {
//             if (jsonR.id) {
//               alert("Invitation sent successfully");
//             } else {
//               alert("Failed to sent invite.");
//             }
//             console.log(jsonR);
//           },
//         });
//       }
//     });
//   }

//   buildISODate(date, time) {
//     var dateArray = date && date.split("-");
//     var timeArray = time && time.split(":");
//     var normalDate = new Date(
//       parseInt(dateArray[0]),
//       parseInt(dateArray[1]) - 1,
//       parseInt(dateArray[2]),
//       parseInt(timeArray[0]),
//       parseInt(timeArray[1]),
//       0,
//       0
//     );
//     return normalDate.toISOString();
//   }

//   addAttendees() {
//     if (this.attendees[this.attendees.length - 1].email == "") return;
//     var newAttendee = { email: "" };
//     this.attendees.unshift(newAttendee);
//   }

//   removeAttendees(itemIndex) {
//     this.attendees.splice(itemIndex, 1);
//   }

//   popLastAttendeeIfEmpty(itemsList) {
//     if (!!itemsList.length) {
//       return itemsList[0]["email"] == ""
//         ? itemsList.shift(itemsList[0])
//         : itemsList;
//     }
//     return [];
//   }

//   validate() {
//     return (
//       this.isStringValid(this.calendarEvent.name) &&
//       this.isStringValid(this.calendarEvent.name) &&
//       this.isStringValid(this.calendarEvent.location) &&
//       this.isStringValid(this.calendarEvent.description) &&
//       this.isStringValid(this.calendarEvent.startDate) &&
//       this.isStringValid(this.calendarEvent.startTime) &&
//       this.isStringValid(this.calendarEvent.endDate) &&
//       this.isStringValid(this.calendarEvent.endTime) &&
//       this.areAttendeesValid(this.attendees)
//     );
//   }

//   isStringValid(str) {
//     if (typeof str != "undefined" && str) {
//       return true;
//     }
//     return false;
//   }

//   areAttendeesValid(attendees) {
//     if (attendees.length == 1 && !this.isStringValid(attendees[0]["email"])) {
//       return false;
//     }
//     return true;
//   }
// }
