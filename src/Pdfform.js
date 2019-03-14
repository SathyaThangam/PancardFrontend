import React, { Component } from 'react';
import "./Form1.css";
import OtpInput from 'react-otp-input';
import axios from "axios";
import $ from 'jquery';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas'
import Modal from "react-responsive-modal";
import indicator from "./instuction.png"
import namefield from "./namefield.jpeg"
import datefield from "./datefield.jpeg"
import officefield from "./officefield.jpeg"
import aadhaarnamefield from "./aadhaarnamefield.jpeg"
import aadhaarnumber from "./aadhaarnumber.jpeg"
import communicationcheckfield from "./communicationcheckfield.jpeg"
import enrolmentid from "./enrolmentid.jpeg"
import parentname from "./parentname.jpeg"
import phonenumberfield from "./phonenumberfield.jpeg"
import prooffield from "./prooffield.jpeg"
import registrationNumber from "./registrationNumber.jpeg"
import residencefield from "./residencefield.jpeg"
import respresentativeAssessee from "./respresentativeAssessee.jpeg"
import sourceOfIncome from "./sourceOfIncome.jpeg"
import statusfield from "./statusfield.jpeg"
// import CodeInput from 'react-native-confirmation-code-input';


let alldata ;
class Form1 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      address: ["Name of Office", "Flat / Room / Door / Block No.", "Name of Premises / Building / Village", "Road / Street / Lane / Post Office", "Area / Locality / Taluka / Sub-Division", "Town / City / District"],
      addressTwo: ["Flat / Room / Door / Block No.", "Name of Premises / Building / Village", "Road / Street / Lane / Post Office", "Area / Locality / Taluka / Sub-Division", "Town / City / District"],
      name: ["Last Name / Surname", "First Name", "Middle Name"],
      addressThree: ["Name of Premises / Building / Village", "Road / Street / Lane/Post Office", "Area / Locality / Taluka/ Sub- Division", "Town / City / District"],
      
      isModalEnabled: false,
      isIndicatorEnabled: false,
      officeEnabled: false,
      isEnabled : false,
      isEnabledCheck: true,
      OtpInput: "",

      errors: {
        NameTitleOne : "",
        OtherName : "",
        NameTitleTwo : "",
        Gender : "",
        ParentName : "",
        Communication : "",
        Status : "",
        Income : "",
        NameTitleThree : "",
        FirstName: "",
        LastName : "",
        MiddleName : "",
        FatherFirstName : "",
        FatherMiddleName: "",
        FatherLastName: "",
        MotherFirstName: "",
        MotherMiddleName: "",
        MotherLastName: "",
        OtherFirstName: "",
        OtherLastName: "",
        OtherMiddleName: "",
        RAFirstName: "",
        RALastName: "",
        RAMiddleName: "",
        AbbreviationOne: "",
        AbbreviationTwo: "",
        ResidenceFlat: "",
        ResidencePremises: "",
        ResidenceRoad: "",
        ResidenceArea: "",
        ResidenceTown: "",
        OfficeName: "",
        OfficeFlat: "",
        OfficePremises: "",
        OfficeRoad: "",
        OfficeArea: "",
        OfficeTown: "",
        RAFlat: "",
        RAPremises: "",
        RARoad: "",
        RAArea: "",
        RATown: "",
        AadhaarFirstName: "",
        AadhaarLastName: "",
        AadhaarMiddleName: "",
        AadhaarNumber: "",
        EnrolmentId : "",
        RegistrationNumber: "",
        ResidenceState: "",
        ResidencePincode: "",
        ResidenceCountry: "",
        OfficeState: "",
        OfficePincode: "",
        OfficeCountry: "",
        RAState: "",
        RAPincode: "",
        CountryCode: "",
        StdCode: "",
        PhoneNumber: "",
        Day: "",
        Month: "",
        Year: "",
        POI: "",
        POA: "",
        POB: "",
        Applicant: "",
        Capacity: "",
        Email: "",
        BusinessCode1: "",
        BusinessCode2: "",
        Salary: "",
        CapitalGains: "",
        IncomeBusiness: "",
        IncomeOtherSource: "",
        IncomeFromHouse: "",
        NoIncome: "",
        phonenumber: "",
        errorid: "1"
      },
      data : {
         NameTitleOne : "",
         OtherName : "",
         NameTitleTwo : "",
         Gender : "",
         ParentName : "",
         Communication : "",
         Status : "",
         Income : "",
         NameTitleThree : "",
         FirstName1 : "", FirstName2: "", FirstName3: "", FirstName4: "", FirstName5: "",
         FirstName6 : "", FirstName7: "", FirstName8: "", FirstName9: "", FirstName10: "",
         FirstName11 : "", FirstName12: "", FirstName13: "", FirstName14: "", FirstName15: "",
         FirstName16 : "", FirstName17: "", FirstName18: "", FirstName19: "", FirstName20: "",
         FirstName21 : "", FirstName22: "", FirstName23: "", FirstName24: "", FirstName25: "",
         FirstName: "",
         LastName1 : "", LastName2: "", LastName3: "", LastName4: "", LastName5: "",
         LastName6 : "", LastName7: "", LastName8: "", LastName9: "", LastName10: "",
         LastName11 : "", LastName12: "", LastName13: "", LastName14: "", LastName15: "",
         LastName16 : "", LastName17: "", LastName18: "", LastName19: "", LastName20: "",
         LastName21 : "", LastName22: "", LastName23: "", LastName24: "", LastName25: "",
         LastName : "",
         MiddleName1 : "", MiddleName2: "", MiddleName3: "", MiddleName4: "", MiddleName5: "",
         MiddleName6 : "", MiddleName7: "", MiddleName8: "", MiddleName9: "", MiddleName10: "",
         MiddleName11 : "", MiddleName12: "", MiddleName13: "", MiddleName14: "", MiddleName15: "",
         MiddleName16 : "", MiddleName17: "", MiddleName18: "", MiddleName19: "", MiddleName20: "",
         MiddleName21 : "", MiddleName22: "", MiddleName23: "", MiddleName24: "", MiddleName25: "",
         MiddleName : "",
         FatherFirstName1 : "", FatherFirstName2: "", FatherFirstName3: "", FatherFirstName4: "", FatherFirstName5: "",
         FatherFirstName6 : "", FatherFirstName7: "", FatherFirstName8: "", FatherFirstName9: "", FatherFirstName10: "",
         FatherFirstName11 : "", FatherFirstName12: "", FatherFirstName13: "", FatherFirstName14: "", FatherFirstName15: "",
         FatherFirstName16 : "", FatherFirstName17: "", FatherFirstName18: "", FatherFirstName19: "", FatherFirstName20: "",
         FatherFirstName21 : "", FatherFirstName22: "", FatherFirstName23: "", FatherFirstName24: "", FatherFirstName25: "",
         FatherFirstName : "",
         FatherMiddleName1 : "", FatherMiddleName2: "", FatherMiddleName3: "", FatherMiddleName4: "", FatherMiddleName5: "",
         FatherMiddleName6 : "", FatherMiddleName7: "", FatherMiddleName8: "", FatherMiddleName9: "", FatherMiddleName10: "",
         FatherMiddleName11 : "", FatherMiddleName12: "", FatherMiddleName13: "", FatherMiddleName14: "", FatherMiddleName15: "",
         FatherMiddleName16 : "", FatherMiddleName17: "", FatherMiddleName18: "", FatherMiddleName19: "", FatherMiddleName20: "",
         FatherMiddleName21 : "", FatherMiddleName22: "", FatherMiddleName23: "", FatherMiddleName24: "", FatherMiddleName25: "",
         FatherMiddleName: "",
         FatherLastName1 : "", FatherLastName2: "", FatherLastName3: "", FatherLastName4: "", FatherLastName5: "",
         FatherLastName6 : "", FatherLastName7: "", FatherLastName8: "", FatherLastName9: "", FatherLastName10: "",
         FatherLastName11 : "", FatherLastName12: "", FatherLastName13: "", FatherLastName14: "", FatherLastName15: "",
         FatherLastName16 : "", FatherLastName17: "", FatherLastName18: "", FatherLastName19: "", FatherLastName20: "",
         FatherLastName21 : "", FatherLastName22: "", FatherLastName23: "", FatherLastName24: "", FatherLastName25: "",
         FatherLastName: "",
         MotherFirstName1 : "", MotherFirstName2: "", MotherFirstName3: "", MotherFirstName4: "", MotherFirstName5: "",
         MotherFirstName6 : "", MotherFirstName7: "", MotherFirstName8: "", MotherFirstName9: "", MotherFirstName10: "",
         MotherFirstName11 : "", MotherFirstName12: "", MotherFirstName13: "", MotherFirstName14: "", MotherFirstName15: "",
         MotherFirstName16 : "", MotherFirstName17: "", MotherFirstName18: "", MotherFirstName19: "", MotherFirstName20: "",
         MotherFirstName21 : "", MotherFirstName22: "", MotherFirstName23: "", MotherFirstName24: "", MotherFirstName25: "",
         MotherFirstName: "",
         MotherMiddleName1 : "", MotherMiddleName2: "", MotherMiddleName3: "", MotherMiddleName4: "", MotherMiddleName5: "",
         MotherMiddleName6 : "", MotherMiddleName7: "", MotherMiddleName8: "", MotherMiddleName9: "", MotherMiddleName10: "",
         MotherMiddleName11 : "", MotherMiddleName12: "", MotherMiddleName13: "", MotherMiddleName14: "", MotherMiddleName15: "",
         MotherMiddleName16 : "", MotherMiddleName17: "", MotherMiddleName18: "", MotherMiddleName19: "", MotherMiddleName20: "",
         MotherMiddleName21 : "", MotherMiddleName22: "", MotherMiddleName23: "", MotherMiddleName24: "", MotherMiddleName25: "",
         MotherMiddleName: "",
         MotherLastName1 : "", MotherLastName2: "", MotherLastName3: "", MotherLastName4: "", MotherLastName5: "",
         MotherLastName6 : "", MotherLastName7: "", MotherLastName8: "", MotherLastName9: "", MotherLastName10: "",
         MotherLastName11 : "", MotherLastName12: "", MotherLastName13: "", MotherLastName14: "", MotherLastName15: "",
         MotherLastName16 : "", MotherLastName17: "", MotherLastName18: "", MotherLastName19: "", MotherLastName20: "",
         MotherLastName21 : "", MotherLastName22: "", MotherLastName23: "", MotherLastName24: "", MotherLastName25: "",
         MotherLastName: "",
         OtherFirstName1 : "", OtherFirstName2: "", OtherFirstName3: "", OtherFirstName4: "", OtherFirstName5: "",
         OtherFirstName6 : "", OtherFirstName7: "", OtherFirstName8: "", OtherFirstName9: "", OtherFirstName10: "",
         OtherFirstName11 : "", OtherFirstName12: "", OtherFirstName13: "", OtherFirstName14: "", OtherFirstName15: "",
         OtherFirstName16 : "", OtherFirstName17: "", OtherFirstName18: "", OtherFirstName19: "", OtherFirstName20: "",
         OtherFirstName21 : "", OtherFirstName22: "", OtherFirstName23: "", OtherFirstName24: "", OtherFirstName25: "",
         OtherFirstName: "",
         OtherLastName1 : "", OtherLastName2: "", OtherLastName3: "", OtherLastName4: "", OtherLastName5: "",
         OtherLastName6 : "", OtherLastName7: "", OtherLastName8: "", OtherLastName9: "", OtherLastName10: "",
         OtherLastName11 : "", OtherLastName12: "", OtherLastName13: "", OtherLastName14: "", OtherLastName15: "",
         OtherLastName16 : "", OtherLastName17: "", OtherLastName18: "", OtherLastName19: "", OtherLastName20: "",
         OtherLastName21 : "", OtherLastName22: "", OtherLastName23: "", OtherLastName24: "", OtherLastName25: "",
         OtherLastName: "",
         OtherMiddleName1 : "", OtherMiddleName2: "", OtherMiddleName3: "", OtherMiddleName4: "", OtherMiddleName5: "",
         OtherMiddleName6 : "", OtherMiddleName7: "", OtherMiddleName8: "", OtherMiddleName9: "", OtherMiddleName10: "",
         OtherMiddleName11 : "", OtherMiddleName12: "", OtherMiddleName13: "", OtherMiddleName14: "", OtherMiddleName15: "",
         OtherMiddleName16 : "", OtherMiddleName17: "", OtherMiddleName18: "", OtherMiddleName19: "", OtherMiddleName20: "",
         OtherMiddleName21 : "", OtherMiddleName22: "", OtherMiddleName23: "", OtherMiddleName24: "", OtherMiddleName25: "",
         OtherMiddleName: "",
         RAFirstName1 : "", RAFirstName2: "", RAFirstName3: "", RAFirstName4: "", RAFirstName5: "",
         RAFirstName6 : "", RAFirstName7: "", RAFirstName8: "", RAFirstName9: "", RAFirstName10: "",
         RAFirstName11 : "", RAFirstName12: "", RAFirstName13: "", RAFirstName14: "", RAFirstName15: "",
         RAFirstName16 : "", RAFirstName17: "", RAFirstName18: "", RAFirstName19: "", RAFirstName20: "",
         RAFirstName21 : "", RAFirstName22: "", RAFirstName23: "", RAFirstName24: "", RAFirstName25: "",
         RAFirstName: "",
         RALastName1 : "", RALastName2: "", RALastName3: "", RALastName4: "", RALastName5: "",
         RALastName6 : "", RALastName7: "", RALastName8: "", RALastName9: "", RALastName10: "",
         RALastName11 : "", RALastName12: "", RALastName13: "", RALastName14: "", RALastName15: "",
         RALastName16 : "", RALastName17: "", RALastName18: "", RALastName19: "", RALastName20: "",
         RALastName21 : "", RALastName22: "", RALastName23: "", RALastName24: "", RALastName25: "",
         RALastName: "",
         RAMiddleName1 : "", RAMiddleName2: "", RAMiddleName3: "", RAMiddleName4: "", RAMiddleName5: "",
         RAMiddleName6 : "", RAMiddleName7: "", RAMiddleName8: "", RAMiddleName9: "", RAMiddleName10: "",
         RAMiddleName11 : "", RAMiddleName12: "", RAMiddleName13: "", RAMiddleName14: "", RAMiddleName15: "",
         RAMiddleName16 : "", RAMiddleName17: "", RAMiddleName18: "", RAMiddleName19: "", RAMiddleName20: "",
         RAMiddleName21 : "", RAMiddleName22: "", RAMiddleName23: "", RAMiddleName24: "", RAMiddleName25: "",
         RAMiddleName: "",
         AbbreviationOne: "",
         AbbreviationTwo: "",
         ResidenceFlat1 : "", ResidenceFlat2: "", ResidenceFlat3: "", ResidenceFlat4: "", ResidenceFlat5: "",
         ResidenceFlat6 : "", ResidenceFlat7: "", ResidenceFlat8: "", ResidenceFlat9: "", ResidenceFlat10: "",
         ResidenceFlat11 : "", ResidenceFlat12: "", ResidenceFlat13: "", ResidenceFlat14: "", ResidenceFlat15: "",
         ResidenceFlat16 : "", ResidenceFlat17: "", ResidenceFlat18: "", ResidenceFlat19: "", ResidenceFlat20: "",
         ResidenceFlat21 : "", ResidenceFlat22: "", ResidenceFlat23: "", ResidenceFlat24: "", ResidenceFlat25: "",
         ResidenceFlat: "",
         ResidencePremises1 : "", ResidencePremises2: "", ResidencePremises3: "", ResidencePremises4: "", ResidencePremises5: "",
         ResidencePremises6 : "", ResidencePremises7: "", ResidencePremises8: "", ResidencePremises9: "", ResidencePremises10: "",
         ResidencePremises11 : "", ResidencePremises12: "", ResidencePremises13: "", ResidencePremises14: "", ResidencePremises15: "",
         ResidencePremises16 : "", ResidencePremises17: "", ResidencePremises18: "", ResidencePremises19: "", ResidencePremises20: "",
         ResidencePremises21 : "", ResidencePremises22: "", ResidencePremises23: "", ResidencePremises24: "", ResidencePremises25: "",
         ResidencePremises: "",
         ResidenceRoad1 : "", ResidenceRoad2: "", ResidenceRoad3: "", ResidenceRoad4: "", ResidenceRoad5: "",
         ResidenceRoad6 : "", ResidenceRoad7: "", ResidenceRoad8: "", ResidenceRoad9: "", ResidenceRoad10: "",
         ResidenceRoad11 : "", ResidenceRoad12: "", ResidenceRoad13: "", ResidenceRoad14: "", ResidenceRoad15: "",
         ResidenceRoad16 : "", ResidenceRoad17: "", ResidenceRoad18: "", ResidenceRoad19: "", ResidenceRoad20: "",
         ResidenceRoad21 : "", ResidenceRoad22: "", ResidenceRoad23: "", ResidenceRoad24: "", ResidenceRoad25: "",
         ResidenceRoad: "",
         ResidenceArea1 : "", ResidenceArea2: "", ResidenceArea3: "", ResidenceArea4: "", ResidenceArea5: "",
         ResidenceArea6 : "", ResidenceArea7: "", ResidenceArea8: "", ResidenceArea9: "", ResidenceArea10: "",
         ResidenceArea11 : "", ResidenceArea12: "", ResidenceArea13: "", ResidenceArea14: "", ResidenceArea15: "",
         ResidenceArea16 : "", ResidenceArea17: "", ResidenceArea18: "", ResidenceArea19: "", ResidenceArea20: "",
         ResidenceArea21 : "", ResidenceArea22: "", ResidenceArea23: "", ResidenceArea24: "", ResidenceArea25: "",
         ResidenceArea: "",
         ResidenceTown1 : "", ResidenceTown2: "", ResidenceTown3: "", ResidenceTown4: "", ResidenceTown5: "",
         ResidenceTown6 : "", ResidenceTown7: "", ResidenceTown8: "", ResidenceTown9: "", ResidenceTown10: "",
         ResidenceTown11 : "", ResidenceTown12: "", ResidenceTown13: "", ResidenceTown14: "", ResidenceTown15: "",
         ResidenceTown16 : "", ResidenceTown17: "", ResidenceTown18: "", ResidenceTown19: "", ResidenceTown20: "",
         ResidenceTown21 : "", ResidenceTown22: "", ResidenceTown23: "", ResidenceTown24: "", ResidenceTown25: "",
         ResidenceTown: "",
         OfficeName1 : "", OfficeName2: "", OfficeName3: "", OfficeName4: "", OfficeName5: "",
         OfficeName6 : "", OfficeName7: "", OfficeName8: "", OfficeName9: "", OfficeName10: "",
         OfficeName11 : "", OfficeName12: "", OfficeName13: "", OfficeName14: "", OfficeName15: "",
         OfficeName16 : "", OfficeName17: "", OfficeName18: "", OfficeName19: "", OfficeName20: "",
         OfficeName21 : "", OfficeName22: "", OfficeName23: "", OfficeName24: "", OfficeName25: "",
         OfficeName: "",
         OfficeFlat1 : "", OfficeFlat2: "", OfficeFlat3: "", OfficeFlat4: "", OfficeFlat5: "",
         OfficeFlat6 : "", OfficeFlat7: "", OfficeFlat8: "", OfficeFlat9: "", OfficeFlat10: "",
         OfficeFlat11 : "", OfficeFlat12: "", OfficeFlat13: "", OfficeFlat14: "", OfficeFlat15: "",
         OfficeFlat16 : "", OfficeFlat17: "", OfficeFlat18: "", OfficeFlat19: "", OfficeFlat20: "",
         OfficeFlat21 : "", OfficeFlat22: "", OfficeFlat23: "", OfficeFlat24: "", OfficeFlat25: "",
         OfficeFlat: "",
         OfficePremises1 : "", OfficePremises2: "", OfficePremises3: "", OfficePremises4: "", OfficePremises5: "",
         OfficePremises6 : "", OfficePremises7: "", OfficePremises8: "", OfficePremises9: "", OfficePremises10: "",
         OfficePremises11 : "", OfficePremises12: "", OfficePremises13: "", OfficePremises14: "", OfficePremises15: "",
         OfficePremises16 : "", OfficePremises17: "", OfficePremises18: "", OfficePremises19: "", OfficePremises20: "",
         OfficePremises21 : "", OfficePremises22: "", OfficePremises23: "", OfficePremises24: "", OfficePremises25: "",
         OfficePremises: "",
         OfficeRoad1 : "", OfficeRoad2: "", OfficeRoad3: "", OfficeRoad4: "", OfficeRoad5: "",
         OfficeRoad6 : "", OfficeRoad7: "", OfficeRoad8: "", OfficeRoad9: "", OfficeRoad10: "",
         OfficeRoad11 : "", OfficeRoad12: "", OfficeRoad13: "", OfficeRoad14: "", OfficeRoad15: "",
         OfficeRoad16 : "", OfficeRoad17: "", OfficeRoad18: "", OfficeRoad19: "", OfficeRoad20: "",
         OfficeRoad21 : "", OfficeRoad22: "", OfficeRoad23: "", OfficeRoad24: "", OfficeRoad25: "",
         OfficeRoad: "",
         OfficeArea1 : "", OfficeArea2: "", OfficeArea3: "", OfficeArea4: "", OfficeArea5: "",
         OfficeArea6 : "", OfficeArea7: "", OfficeArea8: "", OfficeArea9: "", OfficeArea10: "",
         OfficeArea11 : "", OfficeArea12: "", OfficeArea13: "", OfficeArea14: "", OfficeArea15: "",
         OfficeArea16 : "", OfficeArea17: "", OfficeArea18: "", OfficeArea19: "", OfficeArea20: "",
         OfficeArea21 : "", OfficeArea22: "", OfficeArea23: "", OfficeArea24: "", OfficeArea25: "",
         OfficeArea: "",
         OfficeTown1 : "", OfficeTown2: "", OfficeTown3: "", OfficeTown4: "", OfficeTown5: "",
         OfficeTown6 : "", OfficeTown7: "", OfficeTown8: "", OfficeTown9: "", OfficeTown10: "",
         OfficeTown11 : "", OfficeTown12: "", OfficeTown13: "", OfficeTown14: "", OfficeTown15: "",
         OfficeTown16 : "", OfficeTown17: "", OfficeTown18: "", OfficeTown19: "", OfficeTown20: "",
         OfficeTown21 : "", OfficeTown22: "", OfficeTown23: "", OfficeTown24: "", OfficeTown25: "",
         OfficeTown: "",
         RAFlat1 : "", RAFlat2: "", RAFlat3: "", RAFlat4: "", RAFlat5: "",
         RAFlat6 : "", RAFlat7: "", RAFlat8: "", RAFlat9: "", RAFlat10: "",
         RAFlat11 : "", RAFlat12: "", RAFlat13: "", RAFlat14: "", RAFlat15: "",
         RAFlat16 : "", RAFlat17: "", RAFlat18: "", RAFlat19: "", RAFlat20: "",
         RAFlat21 : "", RAFlat22: "", RAFlat23: "", RAFlat24: "", RAFlat25: "",
         RAFlat: "",
         RAPremises1 : "", RAPremises2: "", RAPremises3: "", RAPremises4: "", RAPremises5: "",
         RAPremises6 : "", RAPremises7: "", RAPremises8: "", RAPremises9: "", RAPremises10: "",
         RAPremises11 : "", RAPremises12: "", RAPremises13: "", RAPremises14: "", RAPremises15: "",
         RAPremises16 : "", RAPremises17: "", RAPremises18: "", RAPremises19: "", RAPremises20: "",
         RAPremises21 : "", RAPremises22: "", RAPremises23: "", RAPremises24: "", RAPremises25: "",
         RAPremises: "",
         RARoad1 : "", RARoad2: "", RARoad3: "", RARoad4: "", RARoad5: "",
         RARoad6 : "", RARoad7: "", RARoad8: "", RARoad9: "", RARoad10: "",
         RARoad11 : "", RARoad12: "", RARoad13: "", RARoad14: "", RARoad15: "",
         RARoad16 : "", RARoad17: "", RARoad18: "", RARoad19: "", RARoad20: "",
         RARoad21 : "", RARoad22: "", RARoad23: "", RARoad24: "", RARoad25: "",
         RARoad: "",
         RAArea1 : "", RAArea2: "", RAArea3: "", RAArea4: "", RAArea5: "",
         RAArea6 : "", RAArea7: "", RAArea8: "", RAArea9: "", RAArea10: "",
         RAArea11 : "", RAArea12: "", RAArea13: "", RAArea14: "", RAArea15: "",
         RAArea16 : "", RAArea17: "", RAArea18: "", RAArea19: "", RAArea20: "",
         RAArea21 : "", RAArea22: "", RAArea23: "", RAArea24: "", RAArea25: "",
         RAArea: "",
         RATown1 : "", RATown2: "", RATown3: "", RATown4: "", RATown5: "",
         RATown6 : "", RATown7: "", RATown8: "", RATown9: "", RATown10: "",
         RATown11 : "", RATown12: "", RATown13: "", RATown14: "", RATown15: "",
         RATown16 : "", RATown17: "", RATown18: "", RATown19: "", RATown20: "",
         RATown21 : "", RATown22: "", RATown23: "", RATown24: "", RATown25: "",
         RATown: "",
         AadhaarFirstName1 : "", AadhaarFirstName2: "", AadhaarFirstName3: "", AadhaarFirstName4: "", AadhaarFirstName5: "",
         AadhaarFirstName6 : "", AadhaarFirstName7: "", AadhaarFirstName8: "", AadhaarFirstName9: "", AadhaarFirstName10: "",
         AadhaarFirstName11 : "", AadhaarFirstName12: "", AadhaarFirstName13: "", AadhaarFirstName14: "", AadhaarFirstName15: "",
         AadhaarFirstName16 : "", AadhaarFirstName17: "", AadhaarFirstName18: "", AadhaarFirstName19: "", AadhaarFirstName20: "",
         AadhaarFirstName21 : "", AadhaarFirstName22: "", AadhaarFirstName23: "", AadhaarFirstName24: "", AadhaarFirstName25: "",
         AadhaarFirstName: "",
         AadhaarLastName1 : "", AadhaarLastName2: "", AadhaarLastName3: "", AadhaarLastName4: "", AadhaarLastName5: "",
         AadhaarLastName6 : "", AadhaarLastName7: "", AadhaarLastName8: "", AadhaarLastName9: "", AadhaarLastName10: "",
         AadhaarLastName11 : "", AadhaarLastName12: "", AadhaarLastName13: "", AadhaarLastName14: "", AadhaarLastName15: "",
         AadhaarLastName16 : "", AadhaarLastName17: "", AadhaarLastName18: "", AadhaarLastName19: "", AadhaarLastName20: "",
         AadhaarLastName21 : "", AadhaarLastName22: "", AadhaarLastName23: "", AadhaarLastName24: "", AadhaarLastName25: "",
         AadhaarLastName: "",
         AadhaarMiddleName1 : "", AadhaarMiddleName2: "", AadhaarMiddleName3: "", AadhaarMiddleName4: "", AadhaarMiddleName5: "",
         AadhaarMiddleName6 : "", AadhaarMiddleName7: "", AadhaarMiddleName8: "", AadhaarMiddleName9: "", AadhaarMiddleName10: "",
         AadhaarMiddleName11 : "", AadhaarMiddleName12: "", AadhaarMiddleName13: "", AadhaarMiddleName14: "", AadhaarMiddleName15: "",
         AadhaarMiddleName16 : "", AadhaarMiddleName17: "", AadhaarMiddleName18: "", AadhaarMiddleName19: "", AadhaarMiddleName20: "",
         AadhaarMiddleName21 : "", AadhaarMiddleName22: "", AadhaarMiddleName23: "", AadhaarMiddleName24: "", AadhaarMiddleName25: "",
         AadhaarMiddleName: "",
         AadhaarNumber1 : "", AadhaarNumber2: "", AadhaarNumber3: "", AadhaarNumber4: "", AadhaarNumber5: "",
         AadhaarNumber6 : "", AadhaarNumber7: "", AadhaarNumber8: "", AadhaarNumber9: "", AadhaarNumber10: "",
         AadhaarNumber11 : "", AadhaarNumber12: "",
         AadhaarNumber: "",
         EnrolmentId1 : "", EnrolmentId2: "", EnrolmentId3: "", EnrolmentId4: "", EnrolmentId5: "",
         EnrolmentId6 : "", EnrolmentId7: "", EnrolmentId8: "", EnrolmentId9: "", EnrolmentId10: "",
         EnrolmentId11 : "", EnrolmentId12: "", EnrolmentId13: "", EnrolmentId14: "", EnrolmentId15: "",
         EnrolmentId16 : "", EnrolmentId17: "", EnrolmentId18: "", EnrolmentId19: "", EnrolmentId20: "",
         EnrolmentId21 : "", EnrolmentId22: "", EnrolmentId23: "", EnrolmentId24: "", EnrolmentId25: "",
         EnrolmentId26 : "", EnrolmentId27: "", EnrolmentId28: "",
         EnrolmentId : "",
         RegistrationNumber1 : "", RegistrationNumber2: "", RegistrationNumber3: "", RegistrationNumber4: "", RegistrationNumber5: "",
         RegistrationNumber6 : "", RegistrationNumber7: "", RegistrationNumber8: "", RegistrationNumber9: "", RegistrationNumber10: "",
         RegistrationNumber11 : "", RegistrationNumber12: "", RegistrationNumber13: "", RegistrationNumber14: "", RegistrationNumber15: "",
         RegistrationNumber16 : "", RegistrationNumber17: "", RegistrationNumber18: "", RegistrationNumber19: "", RegistrationNumber20: "",
         RegistrationNumber21 : "", RegistrationNumber22: "", RegistrationNumber23: "", RegistrationNumber24: "", RegistrationNumber25: "",
         RegistrationNumber26 : "", RegistrationNumber27: "", RegistrationNumber28: "", RegistrationNumber29: "", RegistrationNumber30: "",
         RegistrationNumber: "", 
         ResidenceState: "",
         ResidencePincode1 : "", ResidencePincode2: "", ResidencePincode3: "", ResidencePincode4: "", ResidencePincode5: "",
         ResidencePincode6 : "", ResidencePincode7: "",
         ResidencePincode: "",
         ResidenceCountry: "",
         OfficeState: "",
         OfficePincode1 : "", OfficePincode2: "", OfficePincode3: "", OfficePincode4: "", OfficePincode5: "",
         OfficePincode6 : "", OfficePincode7: "",
         OfficePincode: "",
         OfficeCountry: "",
         RAState: "",
         RAPincode1 : "", RAPincode2: "", RAPincode3: "", RAPincode4: "", RAPincode5: "",
         RAPincode6 : "", RAPincode7: "",
         RAPincode: "",
         CountryCode1 : "", CountryCode2: "", CountryCode3: "",
         CountryCode: "",
         StdCode1 : "", StdCode2: "", StdCode3: "", StdCode4: "", StdCode5: "",
         StdCode6 : "", StdCode7: "",
         StdCode: "",
         PhoneNumber1 : "", PhoneNumber2: "", PhoneNumber3: "", PhoneNumber4: "", PhoneNumber5: "",
         PhoneNumber6 : "", PhoneNumber7: "", PhoneNumber8: "", PhoneNumber9: "", PhoneNumber10: "",
         PhoneNumber11 : "", PhoneNumber12: "", PhoneNumber13: "",
         PhoneNumber: "",
         Day1 : "", Day2: "",
         Day: "",
         Month1 : "", Month2: "",
         Month: "",
         Year1 : "", Year2: "", Year3: "", Year4: "",
         Year: "",
         POI: "",
         POA: "",
         POB: "",
         Applicant: "",
         Capacity: "",
         Email: "",
         BusinessCode1: "",
         BusinessCode2: "",
         BusinessCode: "",
         Salary: "",
         CapitalGains: "",
         IncomeBusiness: "",
         IncomeOtherSource: "",
         IncomeFromHouse: "",
         NoIncome: "",
         phonenumber:"",
         otpnumber:"", 
         dataid: "1",

      },
      
      checkarray:["NameTitleOne",'OtherName','NameTitleTwo','Gender','ParentName','Communication','Status','Salary','CapitalGains','IncomeBusiness','IncomeOtherSource','IncomeFromHouse','NoIncome','NameTitleThree'],
      show: false,
      check:0,
      otpverify:0,
      secondcheck:0,
      number : {
          phonenumber:"",
      },
      open: false,
   }
  }

  componentWillMount() {
    
    let alldata = JSON.parse(localStorage.getItem('localdata'));
    let allerror = JSON.parse(localStorage.getItem('localerror'));
    let otp =  JSON.parse(localStorage.getItem('otp'));
 
    this.state.OtpInput = otp;
    let val = this.state.OtpInput;
    this.setState({val})
    
    if (alldata == null) {
       localStorage.setItem('localdata', JSON.stringify({}));
    }
    else
    {
       if(alldata !== {}){
          if(alldata.dataid === "1"){
                 this.setState({ data: alldata }); 
          }
       }  
    }
 
    if (allerror == null) {
      localStorage.setItem('localerror', JSON.stringify({}));
     }
     else
     {
       if(allerror !== {}){
         if(allerror.errorid === "1"){
               this.setState({ errors: allerror });
         }
       }  
     }
  }
  
  handleSave = () => {
     
   axios.post('http://localhost:5000/saveData',this.state.data)
     .then(function (response) 
     {
        console.log(response);
     })
    .catch(function (error) {
        console.log(error);
    });
   }
 
   handleInputdata = (otp, name, id) => {
   
     if (id == "1") {
       let textPattern = /[!@#$%^&*(),.?":{}|<>]/
       let checkdata = textPattern.test(otp);
  
       if (checkdata != "true") {
         const datainput = this.state.data;
         datainput[name] = otp;
         this.setState({ datainput })
  
         localStorage.setItem('localdata', JSON.stringify(this.state.data));
         localStorage.setItem('localerror', JSON.stringify(this.state.errors));
       }
    }
   }

   handleOtpInput = (value) => {
      
    this.state.OtpInput = value;
    let val = this.state.OtpInput;
    this.setState({val})

    localStorage.setItem('otp', JSON.stringify(this.state.OtpInput));
    console.log(value)
    console.log(val)
    console.log(this.state.OtpInput)

   }

  render() {

    return (
   <div>
          <div id = "Form1">    
        <div className="Form1" ><br />
           <div className = "box"> 

                <div>
                <table >
                
                 <tbody> 
                  <tr>
                    <td > 
                         <div className="tablebox1">  
                             <br/> <br/>
                             <div className = "tablebox1Label"> <label className = "tablebox1Label"> Only</label>  </div>  
                             <div className = "tablebox1Label"> <label className = "tablebox1Label"> ‘Individuals’ </label></div>   
                             <div className = "tablebox1Label"> <label className = "tablebox1Label"> to affix recent </label> </div> 
                             <div className = "tablebox1Label"><label className = "tablebox1Label"> photograph</label> </div>
                             <div className = "tablebox1Label"><label className = "tablebox1Label"> (3.5 cm x</label> </div> 
                             <div className = "tablebox1Label"><label className = "tablebox1Label"> 2.5 cm)</label> </div>
                         </div>
                         <div className="tablebox11">
                             <div className = "tablebox11Label"> <label className = "tablebox11Label"> Sign / Left Thumb impression </label> </div>
                             <div className = "tablebox11Label"> <label className = "tablebox11Label"> across this photo</label> </div>
                         </div>
                    </td>
                    <td >
                    <div className="column2">
                      
                    <label className="row1"> Form No. 49A</label><br /> 
                    <label className="row2"> Application for Allotment of Permanent Account Number</label><br />
                    <label className="row3">[In the case of Indian Citizens/lndian Companies/Entities incorporated in India/</label><br />
                    <label className="row4">Unincorporated entities formed in India]</label><br />
                    <label className="row5">See Rule 114</label><br />
                    <label className="row6">To avoid mistake (s), please follow the accompanying instructions and examples before filling up the form</label>
                  
                  </div>  
                   </td>
                   <td>   
                       <div className="tablebox2">
                       <br/> <br/>
                             <div className = "tablebox1Label"> <label className = "tablebox1Label"> Only</label>  </div>  
                             <div className = "tablebox1Label"> <label className = "tablebox1Label"> ‘Individuals’ </label></div>   
                             <div className = "tablebox1Label"> <label className = "tablebox1Label"> to affix recent </label> </div> 
                             <div className = "tablebox1Label"><label className = "tablebox1Label"> photograph</label> </div>
                             <div className = "tablebox1Label"><label className = "tablebox1Label"> (3.5 cm x</label> </div> 
                             <div className = "tablebox1Label"><label className = "tablebox1Label"> 2.5 cm)</label> </div>
                       </div>
                   </td>
                  </tr>
                  </tbody>
                </table>
                <label className = "FirstLabel">Sir, </label> <br/>
                <label className = "FirstLabel">I/We hereby request that a permanent account number be alloted to me/us. </label> <br/>
                <label className = "FirstLabel">I/We give below necessary particulars: </label> <br/>
 
                </div>

                <div className = "content">  
 
                   {/* First Component...... */}
                   <div className = "ColouredLabel "> 
                      <label className = "ColouredLabelAlign"> &nbsp; &nbsp; 1 &nbsp; Full Name (Full expanded name to be mentioned as appearing in proof of identity/date of birth/address documents: initials are not <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; permitted)</label>
                   </div>


                   <label className="FirstLabel"> Please select title,</label>
                   <label className="Label_with_no_space"> as applicable</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 

                    
                   <input 
                       type="checkbox" 
                       className="Check Check_align" 
                       id="1" 
                       name="NameTitleOne[1][]" 
                       value= "Shri" 
                       onClick={(e)=>this.handleNameTitleOneCheck(e,"NameTitleOne")}/>

                   <label className="Label_with_no_space Check_align"> Shri</label>

                   <input 
                      type="checkbox" 
                      className="Check Check_align"
                      id = "2"
                      name = "NameTitleOne[1][]"
                      value = "Smt."
                      onClick={(e)=>this.handleNameTitleOneCheck(e,"NameTitleOne")}/>

                   <label className="Label_with_no_space Check_align"> Smt.</label>

                   <input 
                      type="checkbox" 
                      className="Check Check_align"
                      id = "3"
                      name = "NameTitleOne[1][]"
                      value = "Kumari"
                      onClick={(e)=>this.handleNameTitleOneCheck(e,"NameTitleOne")}/>

                   <label className="Label_with_no_space Check_align"> Kumari</label>

                   <input 
                      type="checkbox" 
                      className="Check Check_align"
                      id = "4"
                      name = "NameTitleOne[1][]"
                      value = "M/s"
                      onClick={(e)=>this.handleNameTitleOneCheck(e,"NameTitleOne")}/>

                   <label className="Label_with_no_space Check_align"> M/s</label> <br /> 
                    
                
                  
                   <table>
                    <tbody> 
                      <tr>
                         <td className ="first_td">
                            {this.state.name.map((data, index) =>
                               <label className="elements"> {data} <br/> </label>   
                            )}
                         </td>

                         <td className = "secondtd"> 
 
 
                         <div> 
                         <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.LastName1}
                               name = "LastName1"
                               id = "LastName1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#LastName1", "#LastName1")}
                               onChange = {this.handleLastName1}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.LastName2}
                               name = "LastName2"
                               id = "LastName2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#LastName1", "#LastName2")}
                               onChange = {this.handleLastName2}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.LastName3}
                               name = "LastName3"
                               id = "LastName3"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#LastName2", "#LastName3")}
                               onChange = {this.handleLastName3}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.LastName4}
                               name = "LastName4"
                               id = "LastName4"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#LastName3", "#LastName4")}
                               onChange = {this.handleLastName4}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.LastName5}
                               name = "LastName5"
                               id = "LastName5"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#LastName4", "#LastName5")}
                               onChange = {this.handleLastName5}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.LastName6}
                               name = "LastName6"
                               id = "LastName6"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#LastName5", "#LastName6")}
                               onChange = {this.handleLastName6}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.LastName7}
                               name = "LastName7"
                               id = "LastName7"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#LastName6", "#LastName7")}
                               onChange = {this.handleLastName7}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.LastName8}
                               name = "LastName8"
                               id = "LastName8"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#LastName7", "#LastName8")}
                               onChange = {this.handleLastName8}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.LastName9}
                               name = "LastName9"
                               id = "LastName9"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#LastName8", "#LastName9")}
                               onChange = {this.handleLastName9}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.LastName10}
                               name = "LastName10"
                               id = "LastName10"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#LastName9", "#LastName10")}
                               onChange = {this.handleLastName10}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.LastName11}
                               name = "LastName11"
                               id = "LastName11"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#LastName10", "#LastName11")}
                               onChange = {this.handleLastName11}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.LastName12}
                               name = "LastName12"
                               id = "LastName12"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#LastName11", "#LastName12")}
                               onChange = {this.handleLastName12}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.LastName13}
                               name = "LastName13"
                               id = "LastName13"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#LastName12", "#LastName13")}
                               onChange = {this.handleLastName13}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.LastName14}
                               name = "LastName14"
                               id = "LastName14"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#LastName13", "#LastName14")}
                               onChange = {this.handleLastName14}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.LastName15}
                               name = "LastName15"
                               id = "LastName15"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#LastName14", "#LastName15")}
                               onChange = {this.handleLastName15}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.LastName16}
                               name = "LastName16"
                               id = "LastName16"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#LastName15", "#LastName16")}
                               onChange = {this.handleLastName16}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.LastName17}
                               name = "LastName17"
                               id = "LastName17"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#LastName16", "#LastName17")}
                               onChange = {this.handleLastName17}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.LastName18}
                               name = "LastName18"
                               id = "LastName18"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#LastName17", "#LastName18")}
                               onChange = {this.handleLastName18}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.LastName19}
                               name = "LastName19"
                               id = "LastName19"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#LastName18", "#LastName19")}
                               onChange = {this.handleLastName19}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.LastName20}
                               name = "LastName20"
                               id = "LastName20"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#LastName19", "#LastName20")}
                               onChange = {this.handleLastName20}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.LastName21}
                               name = "LastName21"
                               id = "LastName21"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#LastName20", "#LastName21")}
                               onChange = {this.handleLastName21}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.LastName22}
                               name = "LastName22"
                               id = "LastName22"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#LastName21", "#LastName22")}
                               onChange = {this.handleLastName22}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.LastName23}
                               name = "LastName23"
                               id = "LastName23"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#LastName22", "#LastName23")}
                               onChange = {this.handleLastName23}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.LastName24}
                               name = "LastName24"
                               id = "LastName24"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#LastName23", "#LastName24")}
                               onChange = {this.handleLastName24}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.LastName25}
                               name = "LastName25"
                               id = "LastName25"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#LastName24", "#LastName25")}
                               onChange = {this.handleLastName25}/>
                           {this.state.isIndicatorEnabled === false ? 
                            <span  className="tooltip" style={{marginLeft: "20px"}}>
                            <img disabled = {!this.state.isIndicatorEnabled} src={indicator} style={{width:"3%",height:"3%"}} />
                              <img src={namefield} className="tooltiptext" style={{width:"600px",height:"150px"}}  />
                           </span>
                           : ""}
                            
                         <br/>

                          </div>
                          <div>
                          <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FirstName1}
                               name = "FirstName1"
                               id = "FirstName1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FirstName1", "#FirstName1")}
                               onChange = {this.handleFirstName1}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FirstName2}
                               name = "FirstName2"
                               id = "FirstName2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FirstName1", "#FirstName2")}
                               onChange = {this.handleFirstName2}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FirstName3}
                               name = "FirstName3"
                               id = "FirstName3"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FirstName2", "#FirstName3")}
                               onChange = {this.handleFirstName3}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FirstName4}
                               name = "FirstName4"
                               id = "FirstName4"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FirstName3", "#FirstName4")}
                               onChange = {this.handleFirstName4}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FirstName5}
                               name = "FirstName5"
                               id = "FirstName5"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FirstName4", "#FirstName5")}
                               onChange = {this.handleFirstName5}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FirstName6}
                               name = "FirstName6"
                               id = "FirstName6"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FirstName5", "#FirstName6")}
                               onChange = {this.handleFirstName6}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FirstName7}
                               name = "FirstName7"
                               id = "FirstName7"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FirstName6", "#FirstName7")}
                               onChange = {this.handleFirstName7}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FirstName8}
                               name = "FirstName8"
                               id = "FirstName8"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FirstName7", "#FirstName8")}
                               onChange = {this.handleFirstName8}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FirstName9}
                               name = "FirstName9"
                               id = "FirstName9"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FirstName8", "#FirstName9")}
                               onChange = {this.handleFirstName9}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FirstName10}
                               name = "FirstName10"
                               id = "FirstName10"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FirstName9", "#FirstName10")}
                               onChange = {this.handleFirstName10}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FirstName11}
                               name = "FirstName11"
                               id = "FirstName11"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FirstName10", "#FirstName11")}
                               onChange = {this.handleFirstName11}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FirstName12}
                               name = "FirstName12"
                               id = "FirstName12"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FirstName11", "#FirstName12")}
                               onChange = {this.handleFirstName12}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FirstName13}
                               name = "FirstName13"
                               id = "FirstName13"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FirstName12", "#FirstName13")}
                               onChange = {this.handleFirstName13}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FirstName14}
                               name = "FirstName14"
                               id = "FirstName14"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FirstName13", "#FirstName14")}
                               onChange = {this.handleFirstName14}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FirstName15}
                               name = "FirstName15"
                               id = "FirstName15"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FirstName14", "#FirstName15")}
                               onChange = {this.handleFirstName15}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FirstName16}
                               name = "FirstName16"
                               id = "FirstName16"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FirstName15", "#FirstName16")}
                               onChange = {this.handleFirstName16}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FirstName17}
                               name = "FirstName17"
                               id = "FirstName17"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FirstName16", "#FirstName17")}
                               onChange = {this.handleFirstName17}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FirstName18}
                               name = "FirstName18"
                               id = "FirstName18"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FirstName17", "#FirstName18")}
                               onChange = {this.handleFirstName18}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FirstName19}
                               name = "FirstName19"
                               id = "FirstName19"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FirstName18", "#FirstName19")}
                               onChange = {this.handleFirstName19}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FirstName20}
                               name = "FirstName20"
                               id = "FirstName20"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FirstName19", "#FirstName20")}
                               onChange = {this.handleFirstName20}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FirstName21}
                               name = "FirstName21"
                               id = "FirstName21"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FirstName20", "#FirstName21")}
                               onChange = {this.handleFirstName21}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FirstName22}
                               name = "FirstName22"
                               id = "FirstName22"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FirstName21", "#FirstName22")}
                               onChange = {this.handleFirstName22}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FirstName23}
                               name = "FirstName23"
                               id = "FirstName23"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FirstName22", "#FirstName23")}
                               onChange = {this.handleFirstName23}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FirstName24}
                               name = "FirstName24"
                               id = "FirstName24"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FirstName23", "#FirstName24")}
                               onChange = {this.handleFirstName24}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FirstName25}
                               name = "FirstName25"
                               id = "FirstName25"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FirstName24", "#FirstName25")}
                               onChange = {this.handleFirstName25}/>

                        {this.state.isIndicatorEnabled === false ? 
                        <span className="tooltip" style={{marginLeft:"20px"}}>
                          <img src={indicator} style={{width:"3%",height:"3%"}} />
                            <img src={namefield} className="tooltiptext" style={{width:"600px",height:"150px"}}  />
                         </span>
                         : ""}
                         <br/>
                          </div>
                          
                           <div>   
                               <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MiddleName1}
                               name = "MiddleName1"
                               id = "MiddleName1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MiddleName1", "#MiddleName1")}
                               onChange = {this.handleMiddleName1}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MiddleName2}
                               name = "MiddleName2"
                               id = "MiddleName2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MiddleName1", "#MiddleName2")}
                               onChange = {this.handleMiddleName2}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MiddleName3}
                               name = "MiddleName3"
                               id = "MiddleName3"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MiddleName2", "#MiddleName3")}
                               onChange = {this.handleMiddleName3}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MiddleName4}
                               name = "MiddleName4"
                               id = "MiddleName4"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MiddleName3", "#MiddleName4")}
                               onChange = {this.handleMiddleName4}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MiddleName5}
                               name = "MiddleName5"
                               id = "MiddleName5"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MiddleName4", "#MiddleName5")}
                               onChange = {this.handleMiddleName5}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MiddleName6}
                               name = "MiddleName6"
                               id = "MiddleName6"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MiddleName5", "#MiddleName6")}
                               onChange = {this.handleMiddleName6}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MiddleName7}
                               name = "MiddleName7"
                               id = "MiddleName7"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MiddleName6", "#MiddleName7")}
                               onChange = {this.handleMiddleName7}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MiddleName8}
                               name = "MiddleName8"
                               id = "MiddleName8"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MiddleName7", "#MiddleName8")}
                               onChange = {this.handleMiddleName8}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MiddleName9}
                               name = "MiddleName9"
                               id = "MiddleName9"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MiddleName8", "#MiddleName9")}
                               onChange = {this.handleMiddleName9}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MiddleName10}
                               name = "MiddleName10"
                               id = "MiddleName10"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MiddleName9", "#MiddleName10")}
                               onChange = {this.handleMiddleName10}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MiddleName11}
                               name = "MiddleName11"
                               id = "MiddleName11"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MiddleName10", "#MiddleName11")}
                               onChange = {this.handleMiddleName11}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MiddleName12}
                               name = "MiddleName12"
                               id = "MiddleName12"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MiddleName11", "#MiddleName12")}
                               onChange = {this.handleMiddleName12}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MiddleName13}
                               name = "MiddleName13"
                               id = "MiddleName13"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MiddleName12", "#MiddleName13")}
                               onChange = {this.handleMiddleName13}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MiddleName14}
                               name = "MiddleName14"
                               id = "MiddleName14"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MiddleName13", "#MiddleName14")}
                               onChange = {this.handleMiddleName14}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MiddleName15}
                               name = "MiddleName15"
                               id = "MiddleName15"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MiddleName14", "#MiddleName15")}
                               onChange = {this.handleMiddleName15}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MiddleName16}
                               name = "MiddleName16"
                               id = "MiddleName16"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MiddleName15", "#MiddleName16")}
                               onChange = {this.handleMiddleName16}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MiddleName17}
                               name = "MiddleName17"
                               id = "MiddleName17"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MiddleName16", "#MiddleName17")}
                               onChange = {this.handleMiddleName17}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MiddleName18}
                               name = "MiddleName18"
                               id = "MiddleName18"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MiddleName17", "#MiddleName18")}
                               onChange = {this.handleMiddleName18}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MiddleName19}
                               name = "MiddleName19"
                               id = "MiddleName19"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MiddleName18", "#MiddleName19")}
                               onChange = {this.handleMiddleName19}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MiddleName20}
                               name = "MiddleName20"
                               id = "MiddleName20"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MiddleName19", "#MiddleName20")}
                               onChange = {this.handleMiddleName20}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MiddleName21}
                               name = "MiddleName21"
                               id = "MiddleName21"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MiddleName20", "#MiddleName21")}
                               onChange = {this.handleMiddleName21}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MiddleName22}
                               name = "MiddleName22"
                               id = "MiddleName22"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MiddleName21", "#MiddleName22")}
                               onChange = {this.handleMiddleName22}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MiddleName23}
                               name = "MiddleName23"
                               id = "MiddleName23"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MiddleName22", "#MiddleName23")}
                               onChange = {this.handleMiddleName23}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MiddleName24}
                               name = "MiddleName24"
                               id = "MiddleName24"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MiddleName23", "#MiddleName24")}
                               onChange = {this.handleMiddleName24}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MiddleName25}
                               name = "MiddleName25"
                               id = "MiddleName25"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MiddleName24", "#MiddleName25")}
                               onChange = {this.handleMiddleName25}/>

                         {this.state.isIndicatorEnabled === false ? 
                          <span className="tooltip" style={{marginLeft:"20px"}}>
                          <img src={indicator} style={{width:"3%",height:"3%"}} />
                            <img src={namefield} className="tooltiptext" style={{width:"600px",height:"150px"}}  />
                         </span>
                         : ""}
                         <br/>  
                            <span className="ErrorMsg">{this.state.errors.NameTitleOne}</span>
                            </div>
                         </td>
                      </tr>
                      </tbody>
                   </table>
                   

                   {/* Second Component */}

                   <div className = "ColouredLabel">
                      <label  className = "ColouredLabelAlign"> &nbsp; &nbsp;2 &nbsp; Abbreviations of the above name, as you would like it, to be printed on the PAN card</label>
                      {this.state.isIndicatorEnabled === false ? 
                      <span className="tooltip" style = {{marginLeft : "32.4%"}}>
                          <img src={indicator} style={{width:"2%",height:"2%"}} />
                          <img src={namefield} className="tooltiptext" style={{width:"600px",height:"150px", textAlign: "right"}}  />
                         </span>
                      : ""}
                   </div>
                   
                   <div className = "box_left"> 
                       <div> 
                       <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationOne1}
                               name = "AbbreviationOne1"
                               id = "AbbreviationOne1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationOne1", "#AbbreviationOne1")}
                               onChange = {this.handleAbbreviationOne1}/>

                            <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationOne2}
                               name = "AbbreviationOne2"
                               id = "AbbreviationOne2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationOne1", "#AbbreviationOne2")}
                               onChange = {this.handleAbbreviationOne2}/>

                            <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationOne3}
                               name = "AbbreviationOne3"
                               id = "AbbreviationOne3"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationOne2", "#AbbreviationOne3")}
                               onChange = {this.handleAbbreviationOne3}/>

                            <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationOne4}
                               name = "AbbreviationOne4"
                               id = "AbbreviationOne4"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationOne3", "#AbbreviationOne4")}
                               onChange = {this.handleAbbreviationOne4}/>

                            <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationOne5}
                               name = "AbbreviationOne5"
                               id = "AbbreviationOne5"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationOne4", "#AbbreviationOne5")}
                               onChange = {this.handleAbbreviationOne5}/> 

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationOne6}
                               name = "AbbreviationOne6"
                               id = "AbbreviationOne6"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationOne5", "#AbbreviationOne6")}
                               onChange = {this.handleAbbreviationOne6}/>

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationOne7}
                               name = "AbbreviationOne7"
                               id = "AbbreviationOne7"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationOne6", "#AbbreviationOne7")}
                               onChange = {this.handleAbbreviationOne7}/>

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationOne8}
                               name = "AbbreviationOne8"
                               id = "AbbreviationOne8"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationOne7", "#AbbreviationOne8")}
                               onChange = {this.handleAbbreviationOne8}/> 

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationOne9}
                               name = "AbbreviationOne9"
                               id = "AbbreviationOne9"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationOne8", "#AbbreviationOne9")}
                               onChange = {this.handleAbbreviationOne9}/>

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationOne10}
                               name = "AbbreviationOne10"
                               id = "AbbreviationOne10"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationOne9", "#AbbreviationOne10")}
                               onChange = {this.handleAbbreviationOne10}/>

                            <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationOne11}
                               name = "AbbreviationOne11"
                               id = "AbbreviationOne11"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationOne10", "#AbbreviationOne11")}
                               onChange = {this.handleAbbreviationOne11}/>

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationOne12}
                               name = "AbbreviationOne12"
                               id = "AbbreviationOne12"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationOne11", "#AbbreviationOne12")}
                               onChange = {this.handleAbbreviationOne12}/> 

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationOne13}
                               name = "AbbreviationOne13"
                               id = "AbbreviationOne13"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationOne12", "#AbbreviationOne13")}
                               onChange = {this.handleAbbreviationOne13}/>

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationOne14}
                               name = "AbbreviationOne14"
                               id = "AbbreviationOne14"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationOne13", "#AbbreviationOne14")}
                               onChange = {this.handleAbbreviationOne14}/>

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationOne15}
                               name = "AbbreviationOne15"
                               id = "AbbreviationOne15"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationOne14", "#AbbreviationOne15")}
                               onChange = {this.handleAbbreviationOne15}/>

                            <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationOne16}
                               name = "AbbreviationOne16"
                               id = "AbbreviationOne16"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationOne15", "#AbbreviationOne16")}
                               onChange = {this.handleAbbreviationOne16}/>

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationOne17}
                               name = "AbbreviationOne17"
                               id = "AbbreviationOne17"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationOne16", "#AbbreviationOne17")}
                               onChange = {this.handleAbbreviationOne17}/>

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationOne18}
                               name = "AbbreviationOne18"
                               id = "AbbreviationOne18"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationOne17", "#AbbreviationOne18")}
                               onChange = {this.handleAbbreviationOne18}/>

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationOne19}
                               name = "AbbreviationOne19"
                               id = "AbbreviationOne19"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationOne18", "#AbbreviationOne19")}
                               onChange = {this.handleAbbreviationOne19}/>

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationOne20}
                               name = "AbbreviationOne20"
                               id = "AbbreviationOne20"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationOne19", "#AbbreviationOne20")}
                               onChange = {this.handleAbbreviationOne20}/>

                            <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationOne21}
                               name = "AbbreviationOne21"
                               id = "AbbreviationOne21"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationOne20", "#AbbreviationOne21")}
                               onChange = {this.handleAbbreviationOne21}/>

                            <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationOne22}
                               name = "AbbreviationOne22"
                               id = "AbbreviationOne22"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationOne21", "#AbbreviationOne22")}
                               onChange = {this.handleAbbreviationOne22}/>

                            <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationOne23}
                               name = "AbbreviationOne23"
                               id = "AbbreviationOne23"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationOne22", "#AbbreviationOne23")}
                               onChange = {this.handleAbbreviationOne23}/>

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationOne24}
                               name = "AbbreviationOne24"
                               id = "AbbreviationOne24"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationOne23", "#AbbreviationOne24")}
                               onChange = {this.handleAbbreviationOne24}/>

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationOne25}
                               name = "AbbreviationOne25"
                               id = "AbbreviationOne25"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationOne24", "#AbbreviationOne25")}
                               onChange = {this.handleAbbreviationOne25}/>

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationOne26}
                               name = "AbbreviationOne26"
                               id = "AbbreviationOne26"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationOne25", "#AbbreviationOne26")}
                               onChange = {this.handleAbbreviationOne26}/>

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationOne27}
                               name = "AbbreviationOne27"
                               id = "AbbreviationOne27"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationOne26", "#AbbreviationOne27")}
                               onChange = {this.handleAbbreviationOne27}/>

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationOne28}
                               name = "AbbreviationOne28"
                               id = "AbbreviationOne28"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationOne27", "#AbbreviationOne28")}
                               onChange = {this.handleAbbreviationOne28}/>

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationOne29}
                               name = "AbbreviationOne29"
                               id = "AbbreviationOne29"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationOne28", "#AbbreviationOne29")}
                               onChange = {this.handleAbbreviationOne29}/>

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationOne30}
                               name = "AbbreviationOne30"
                               id = "AbbreviationOne30"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationOne29", "#AbbreviationOne30")}
                               onChange = {this.handleAbbreviationOne30}/>

                            <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationOne31}
                               name = "AbbreviationOne31"
                               id = "AbbreviationOne31"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationOne30", "#AbbreviationOne31")}
                               onChange = {this.handleAbbreviationOne31}/>

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationOne32}
                               name = "AbbreviationOne32"
                               id = "AbbreviationOne32"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationOne31", "#AbbreviationOne32")}
                               onChange = {this.handleAbbreviationOne32}/> 

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationOne33}
                               name = "AbbreviationOne33"
                               id = "AbbreviationOne33"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationOne32", "#AbbreviationOne33")}
                               onChange = {this.handleAbbreviationOne33}/>

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationOne34}
                               name = "AbbreviationOne34"
                               id = "AbbreviationOne34"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationOne33", "#AbbreviationOne34")}
                               onChange = {this.handleAbbreviationOne34}/>

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationOne35}
                               name = "AbbreviationOne35"
                               id = "AbbreviationOne35"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationOne34", "#AbbreviationOne35")}
                               onChange = {this.handleAbbreviationOne35}/>

                            <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationOne36}
                               name = "AbbreviationOne36"
                               id = "AbbreviationOne36"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationOne35", "#AbbreviationOne36")}
                               onChange = {this.handleAbbreviationOne36}/>

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationOne37}
                               name = "AbbreviationOne37"
                               id = "AbbreviationOne37"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationOne36", "#AbbreviationOne37")}
                               onChange = {this.handleAbbreviationOne37}/>

                        
                          <br/>
                        </div>
                            
                        <div>
                       <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationTwo1}
                               name = "AbbreviationTwo1"
                               id = "AbbreviationTwo1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationTwo1", "#AbbreviationTwo1")}
                               onChange = {this.handleAbbreviationTwo1}/>

                            <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationTwo2}
                               name = "AbbreviationTwo2"
                               id = "AbbreviationTwo2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationTwo1", "#AbbreviationTwo2")}
                               onChange = {this.handleAbbreviationTwo2}/>

                            <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationTwo3}
                               name = "AbbreviationTwo3"
                               id = "AbbreviationTwo3"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationTwo2", "#AbbreviationTwo3")}
                               onChange = {this.handleAbbreviationTwo3}/>

                            <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationTwo4}
                               name = "AbbreviationTwo4"
                               id = "AbbreviationTwo4"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationTwo3", "#AbbreviationTwo4")}
                               onChange = {this.handleAbbreviationTwo4}/>

                            <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationTwo5}
                               name = "AbbreviationTwo5"
                               id = "AbbreviationTwo5"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationTwo4", "#AbbreviationTwo5")}
                               onChange = {this.handleAbbreviationTwo5}/> 

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationTwo6}
                               name = "AbbreviationTwo6"
                               id = "AbbreviationTwo6"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationTwo5", "#AbbreviationTwo6")}
                               onChange = {this.handleAbbreviationTwo6}/>

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationTwo7}
                               name = "AbbreviationTwo7"
                               id = "AbbreviationTwo7"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationTwo6", "#AbbreviationTwo7")}
                               onChange = {this.handleAbbreviationTwo7}/>

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationTwo8}
                               name = "AbbreviationTwo8"
                               id = "AbbreviationTwo8"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationTwo7", "#AbbreviationTwo8")}
                               onChange = {this.handleAbbreviationTwo8}/> 

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationTwo9}
                               name = "AbbreviationTwo9"
                               id = "AbbreviationTwo9"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationTwo8", "#AbbreviationTwo9")}
                               onChange = {this.handleAbbreviationTwo9}/>

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationTwo10}
                               name = "AbbreviationTwo10"
                               id = "AbbreviationTwo10"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationTwo9", "#AbbreviationTwo10")}
                               onChange = {this.handleAbbreviationTwo10}/>

                            <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationTwo11}
                               name = "AbbreviationTwo11"
                               id = "AbbreviationTwo11"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationTwo10", "#AbbreviationTwo11")}
                               onChange = {this.handleAbbreviationTwo11}/>

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationTwo12}
                               name = "AbbreviationTwo12"
                               id = "AbbreviationTwo12"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationTwo11", "#AbbreviationTwo12")}
                               onChange = {this.handleAbbreviationTwo12}/> 

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationTwo13}
                               name = "AbbreviationTwo13"
                               id = "AbbreviationTwo13"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationTwo12", "#AbbreviationTwo13")}
                               onChange = {this.handleAbbreviationTwo13}/>

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationTwo14}
                               name = "AbbreviationTwo14"
                               id = "AbbreviationTwo14"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationTwo13", "#AbbreviationTwo14")}
                               onChange = {this.handleAbbreviationTwo14}/>

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationTwo15}
                               name = "AbbreviationTwo15"
                               id = "AbbreviationTwo15"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationTwo14", "#AbbreviationTwo15")}
                               onChange = {this.handleAbbreviationTwo15}/>

                            <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationTwo16}
                               name = "AbbreviationTwo16"
                               id = "AbbreviationTwo16"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationTwo15", "#AbbreviationTwo16")}
                               onChange = {this.handleAbbreviationTwo16}/>

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationTwo17}
                               name = "AbbreviationTwo17"
                               id = "AbbreviationTwo17"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationTwo16", "#AbbreviationTwo17")}
                               onChange = {this.handleAbbreviationTwo17}/>

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationTwo18}
                               name = "AbbreviationTwo18"
                               id = "AbbreviationTwo18"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationTwo17", "#AbbreviationTwo18")}
                               onChange = {this.handleAbbreviationTwo18}/>

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationTwo19}
                               name = "AbbreviationTwo19"
                               id = "AbbreviationTwo19"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationTwo18", "#AbbreviationTwo19")}
                               onChange = {this.handleAbbreviationTwo19}/>

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationTwo20}
                               name = "AbbreviationTwo20"
                               id = "AbbreviationTwo20"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationTwo19", "#AbbreviationTwo20")}
                               onChange = {this.handleAbbreviationTwo20}/>

                            <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationTwo21}
                               name = "AbbreviationTwo21"
                               id = "AbbreviationTwo21"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationTwo20", "#AbbreviationTwo21")}
                               onChange = {this.handleAbbreviationTwo21}/>

                            <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationTwo22}
                               name = "AbbreviationTwo22"
                               id = "AbbreviationTwo22"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationTwo21", "#AbbreviationTwo22")}
                               onChange = {this.handleAbbreviationTwo22}/>

                            <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationTwo23}
                               name = "AbbreviationTwo23"
                               id = "AbbreviationTwo23"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationTwo22", "#AbbreviationTwo23")}
                               onChange = {this.handleAbbreviationTwo23}/>

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationTwo24}
                               name = "AbbreviationTwo24"
                               id = "AbbreviationTwo24"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationTwo23", "#AbbreviationTwo24")}
                               onChange = {this.handleAbbreviationTwo24}/>

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationTwo25}
                               name = "AbbreviationTwo25"
                               id = "AbbreviationTwo25"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationTwo24", "#AbbreviationTwo25")}
                               onChange = {this.handleAbbreviationTwo25}/>

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationTwo26}
                               name = "AbbreviationTwo26"
                               id = "AbbreviationTwo26"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationTwo25", "#AbbreviationTwo26")}
                               onChange = {this.handleAbbreviationTwo26}/>

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationTwo27}
                               name = "AbbreviationTwo27"
                               id = "AbbreviationTwo27"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationTwo26", "#AbbreviationTwo27")}
                               onChange = {this.handleAbbreviationTwo27}/>

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationTwo28}
                               name = "AbbreviationTwo28"
                               id = "AbbreviationTwo28"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationTwo27", "#AbbreviationTwo28")}
                               onChange = {this.handleAbbreviationTwo28}/>

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationTwo29}
                               name = "AbbreviationTwo29"
                               id = "AbbreviationTwo29"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationTwo28", "#AbbreviationTwo29")}
                               onChange = {this.handleAbbreviationTwo29}/>

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationTwo30}
                               name = "AbbreviationTwo30"
                               id = "AbbreviationTwo30"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationTwo29", "#AbbreviationTwo30")}
                               onChange = {this.handleAbbreviationTwo30}/>

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationTwo31}
                               name = "AbbreviationTwo31"
                               id = "AbbreviationTwo31"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationTwo30", "#AbbreviationTwo31")}
                               onChange = {this.handleAbbreviationTwo31}/>

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationTwo32}
                               name = "AbbreviationTwo32"
                               id = "AbbreviationTwo32"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationTwo31", "#AbbreviationTwo32")}
                               onChange = {this.handleAbbreviationTwo32}/> 

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationTwo33}
                               name = "AbbreviationTwo33"
                               id = "AbbreviationTwo33"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationTwo32", "#AbbreviationTwo33")}
                               onChange = {this.handleAbbreviationTwo33}/>

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationTwo34}
                               name = "AbbreviationTwo34"
                               id = "AbbreviationTwo34"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationTwo33", "#AbbreviationTwo34")}
                               onChange = {this.handleAbbreviationTwo34}/>

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationTwo35}
                               name = "AbbreviationTwo35"
                               id = "AbbreviationTwo35"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationTwo34", "#AbbreviationTwo35")}
                               onChange = {this.handleAbbreviationTwo35}/>

                            <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationTwo36}
                               name = "AbbreviationTwo36"
                               id = "AbbreviationTwo36"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationTwo35", "#AbbreviationTwo36")}
                               onChange = {this.handleAbbreviationTwo36}/>

                             <input 
                               type="text" 
                               className="Abbreviation-control"
                               maxLength = "1"
                               value = {this.state.data.AbbreviationTwo37}
                               name = "AbbreviationTwo37"
                               id = "AbbreviationTwo37"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AbbreviationTwo36", "#AbbreviationTwo37")}
                               onChange = {this.handleAbbreviationTwo37}/>
 
                        <br/>

                       </div>
                   </div>

                   {/* Third Component */}

                   <div className = "ColouredLabel"> 
                        
                        <label> &nbsp; &nbsp;3 &nbsp; Have you ever been known by any other name?  </label> 
                         &nbsp; &nbsp;
                        <input 
                           type="checkbox" 
                           className = "Check" 
                           id = "5"
                           name="OtherName[2][]"
                           value = "Yes"
                           onClick={(e)=>this.handleOtherNameCheck(e,"OtherName")}/>
                        <label className="Label_with_no_space"> Yes</label> 

                         &nbsp; &nbsp;
                        <input 
                           type="checkbox" 
                           className = "Check"
                           id = "6" 
                           name="OtherName[2][]"
                           value = "No"
                           onClick={(e)=>this.handleOtherNameCheck(e,"OtherName")}/>
                        <label className="Label_with_no_space"> No</label> 
                                              
                        <label className="Label_with_no_space Move_End"> (please tick as applicable)</label> 

                        {this.state.isIndicatorEnabled === false ? 
                        <span className="tooltip" style={{marginLeft:"5%"}}>
                          <img src={indicator} style={{width:"2%",height:"2%" , marginLeft: "4.2%"}} />
                            <label className="tooltiptext tooltiptextLabel" style={{width:"450px",height:"20px" , fontSize: "17px", fontWeight: "inherit"}} >Please tick as applicable</label>
                         </span>
                         : ""}
                   </div>

                   <div id = "OtherNameDiv" >
                   <label className="FirstLabel small_font"> If yes, please give that other name</label> <br/>
                   <label className="FirstLabel"> Please select title,</label>
                   <label className="Label_with_no_space"> as applicable</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
                   
                   <input 
                       type="checkbox" 
                       className="Check" 
                       id="7" 
                       name="NameTitleTwo[3][]" 
                       value = "1Shri" 
                       onClick={(e)=>this.handleNameTitleTwoCheck(e,"NameTitleTwo")}/>
                   <label className="Label_with_no_space"> Shri</label>

                   <input 
                       type="checkbox" 
                       className="Check" 
                       id= "8"
                       name= "NameTitleTwo[3][]"
                       value = "1Smt.1"
                       onClick = {(e) => this.handleNameTitleTwoCheck(e, "NameTitleTwo")}/>
                   <label className="Label_with_no_space"> Smt.</label>

                   <input 
                       type="checkbox" 
                       className="Check" 
                       id= "9"
                       name= "NameTitleTwo[3][]"
                       value = "1Kumari"
                       onClick = {(e) => this.handleNameTitleTwoCheck(e, "NameTitleTwo")}/>
                   <label className="Label_with_no_space"> Kumari</label>

                   <input 
                       type="checkbox" 
                       className="Check" 
                       id= "10"
                       name= "NameTitleTwo[3][]"
                       value = "1M/s"
                       onClick = {(e) => this.handleNameTitleTwoCheck(e, "NameTitleTwo")}/>
                   <label className="Label_with_no_space"> M/s</label> <br />
                    
                   <table>
                   <tbody>
                      <tr>
                         <td className ="first_td">
                           {this.state.name.map((data, index) =>
                               <label className="elements"> {data}  <br/></label>   
                            )}
                         </td>

                         <td className = "secondtd">
                          <div> 
                          <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherLastName1}
                               name = "OtherLastName1"
                               id = "OtherLastName1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherLastName1", "#OtherLastName1")}
                               onChange = {this.handleOtherLastName1}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherLastName2}
                               name = "OtherLastName2"
                               id = "OtherLastName2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherLastName1", "#OtherLastName2")}
                               onChange = {this.handleOtherLastName2}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherLastName3}
                               name = "OtherLastName3"
                               id = "OtherLastName3"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherLastName2", "#OtherLastName3")}
                               onChange = {this.handleOtherLastName3}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherLastName4}
                               name = "OtherLastName4"
                               id = "OtherLastName4"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherLastName3", "#OtherLastName4")}
                               onChange = {this.handleOtherLastName4}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherLastName5}
                               name = "OtherLastName5"
                               id = "OtherLastName5"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherLastName4", "#OtherLastName5")}
                               onChange = {this.handleOtherLastName5}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherLastName6}
                               name = "OtherLastName6"
                               id = "OtherLastName6"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherLastName5", "#OtherLastName6")}
                               onChange = {this.handleOtherLastName6}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherLastName7}
                               name = "OtherLastName7"
                               id = "OtherLastName7"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherLastName6", "#OtherLastName7")}
                               onChange = {this.handleOtherLastName7}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherLastName8}
                               name = "OtherLastName8"
                               id = "OtherLastName8"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherLastName7", "#OtherLastName8")}
                               onChange = {this.handleOtherLastName8}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherLastName9}
                               name = "OtherLastName9"
                               id = "OtherLastName9"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherLastName8", "#OtherLastName9")}
                               onChange = {this.handleOtherLastName9}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherLastName10}
                               name = "OtherLastName10"
                               id = "OtherLastName10"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherLastName9", "#OtherLastName10")}
                               onChange = {this.handleOtherLastName10}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherLastName11}
                               name = "OtherLastName11"
                               id = "OtherLastName11"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherLastName10", "#OtherLastName11")}
                               onChange = {this.handleOtherLastName11}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherLastName12}
                               name = "OtherLastName12"
                               id = "OtherLastName12"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherLastName11", "#OtherLastName12")}
                               onChange = {this.handleOtherLastName12}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherLastName13}
                               name = "OtherLastName13"
                               id = "OtherLastName13"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherLastName12", "#OtherLastName13")}
                               onChange = {this.handleOtherLastName13}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherLastName14}
                               name = "OtherLastName14"
                               id = "OtherLastName14"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherLastName13", "#OtherLastName14")}
                               onChange = {this.handleOtherLastName14}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherLastName15}
                               name = "OtherLastName15"
                               id = "OtherLastName15"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherLastName14", "#OtherLastName15")}
                               onChange = {this.handleOtherLastName15}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherLastName16}
                               name = "OtherLastName16"
                               id = "OtherLastName16"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherLastName15", "#OtherLastName16")}
                               onChange = {this.handleOtherLastName16}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherLastName17}
                               name = "OtherLastName17"
                               id = "OtherLastName17"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherLastName16", "#OtherLastName17")}
                               onChange = {this.handleOtherLastName17}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherLastName18}
                               name = "OtherLastName18"
                               id = "OtherLastName18"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherLastName17", "#OtherLastName18")}
                               onChange = {this.handleOtherLastName18}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherLastName19}
                               name = "OtherLastName19"
                               id = "OtherLastName19"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherLastName18", "#OtherLastName19")}
                               onChange = {this.handleOtherLastName19}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherLastName20}
                               name = "OtherLastName20"
                               id = "OtherLastName20"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherLastName19", "#OtherLastName20")}
                               onChange = {this.handleOtherLastName20}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherLastName21}
                               name = "OtherLastName21"
                               id = "OtherLastName21"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherLastName20", "#OtherLastName21")}
                               onChange = {this.handleOtherLastName21}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherLastName22}
                               name = "OtherLastName22"
                               id = "OtherLastName22"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherLastName21", "#OtherLastName22")}
                               onChange = {this.handleOtherLastName22}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherLastName23}
                               name = "OtherLastName23"
                               id = "OtherLastName23"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherLastName22", "#OtherLastName23")}
                               onChange = {this.handleOtherLastName23}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherLastName24}
                               name = "OtherLastName24"
                               id = "OtherLastName24"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherLastName23", "#OtherLastName24")}
                               onChange = {this.handleOtherLastName24}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherLastName25}
                               name = "OtherLastName25"
                               id = "OtherLastName25"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherLastName24", "#OtherLastName25")}
                               onChange = {this.handleOtherLastName25}/>

                          {this.state.isIndicatorEnabled === false ? 
                          <span className="tooltip" style={{marginLeft:"3%"}}>
                          <img src={indicator} style={{width:"3%",height:"3%"}} />
                            <img src={namefield} className="tooltiptext" style={{width:"600px",height:"150px"}}  />
                         </span>
                         : ""}
                         <br/>
                          </div>
                           
                           <div> 
                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherFirstName1}
                               name = "OtherFirstName1"
                               id = "OtherFirstName1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherFirstName1", "#OtherFirstName1")}
                               onChange = {this.handleOtherFirstName1}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherFirstName2}
                               name = "OtherFirstName2"
                               id = "OtherFirstName2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherFirstName1", "#OtherFirstName2")}
                               onChange = {this.handleOtherFirstName2}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherFirstName3}
                               name = "OtherFirstName3"
                               id = "OtherFirstName3"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherFirstName2", "#OtherFirstName3")}
                               onChange = {this.handleOtherFirstName3}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherFirstName4}
                               name = "OtherFirstName4"
                               id = "OtherFirstName4"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherFirstName3", "#OtherFirstName4")}
                               onChange = {this.handleOtherFirstName4}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherFirstName5}
                               name = "OtherFirstName5"
                               id = "OtherFirstName5"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherFirstName4", "#OtherFirstName5")}
                               onChange = {this.handleOtherFirstName5}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherFirstName6}
                               name = "OtherFirstName6"
                               id = "OtherFirstName6"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherFirstName5", "#OtherFirstName6")}
                               onChange = {this.handleOtherFirstName6}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherFirstName7}
                               name = "OtherFirstName7"
                               id = "OtherFirstName7"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherFirstName6", "#OtherFirstName7")}
                               onChange = {this.handleOtherFirstName7}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherFirstName8}
                               name = "OtherFirstName8"
                               id = "OtherFirstName8"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherFirstName7", "#OtherFirstName8")}
                               onChange = {this.handleOtherFirstName8}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherFirstName9}
                               name = "OtherFirstName9"
                               id = "OtherFirstName9"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherFirstName8", "#OtherFirstName9")}
                               onChange = {this.handleOtherFirstName9}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherFirstName10}
                               name = "OtherFirstName10"
                               id = "OtherFirstName10"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherFirstName9", "#OtherFirstName10")}
                               onChange = {this.handleOtherFirstName10}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherFirstName11}
                               name = "OtherFirstName11"
                               id = "OtherFirstName11"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherFirstName10", "#OtherFirstName11")}
                               onChange = {this.handleOtherFirstName11}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherFirstName12}
                               name = "OtherFirstName12"
                               id = "OtherFirstName12"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherFirstName11", "#OtherFirstName12")}
                               onChange = {this.handleOtherFirstName12}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherFirstName13}
                               name = "OtherFirstName13"
                               id = "OtherFirstName13"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherFirstName12", "#OtherFirstName13")}
                               onChange = {this.handleOtherFirstName13}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherFirstName14}
                               name = "OtherFirstName14"
                               id = "OtherFirstName14"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherFirstName13", "#OtherFirstName14")}
                               onChange = {this.handleOtherFirstName14}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherFirstName15}
                               name = "OtherFirstName15"
                               id = "OtherFirstName15"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherFirstName14", "#OtherFirstName15")}
                               onChange = {this.handleOtherFirstName15}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherFirstName16}
                               name = "OtherFirstName16"
                               id = "OtherFirstName16"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherFirstName15", "#OtherFirstName16")}
                               onChange = {this.handleOtherFirstName16}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherFirstName17}
                               name = "OtherFirstName17"
                               id = "OtherFirstName17"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherFirstName16", "#OtherFirstName17")}
                               onChange = {this.handleOtherFirstName17}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherFirstName18}
                               name = "OtherFirstName18"
                               id = "OtherFirstName18"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherFirstName17", "#OtherFirstName18")}
                               onChange = {this.handleOtherFirstName18}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherFirstName19}
                               name = "OtherFirstName19"
                               id = "OtherFirstName19"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherFirstName18", "#OtherFirstName19")}
                               onChange = {this.handleOtherFirstName19}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherFirstName20}
                               name = "OtherFirstName20"
                               id = "OtherFirstName20"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherFirstName19", "#OtherFirstName20")}
                               onChange = {this.handleOtherFirstName20}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherFirstName21}
                               name = "OtherFirstName21"
                               id = "OtherFirstName21"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherFirstName20", "#OtherFirstName21")}
                               onChange = {this.handleOtherFirstName21}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherFirstName22}
                               name = "OtherFirstName22"
                               id = "OtherFirstName22"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherFirstName21", "#OtherFirstName22")}
                               onChange = {this.handleOtherFirstName22}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherFirstName23}
                               name = "OtherFirstName23"
                               id = "OtherFirstName23"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherFirstName22", "#OtherFirstName23")}
                               onChange = {this.handleOtherFirstName23}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherFirstName24}
                               name = "OtherFirstName24"
                               id = "OtherFirstName24"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherFirstName23", "#OtherFirstName24")}
                               onChange = {this.handleOtherFirstName24}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherFirstName25}
                               name = "OtherFirstName25"
                               id = "OtherFirstName25"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherFirstName24", "#OtherFirstName25")}
                               onChange = {this.handleOtherFirstName25}/>
                         {this.state.isIndicatorEnabled === false ? 
                       <span className="tooltip" style={{marginLeft:"3%"}}>
                          <img src={indicator} style={{width:"3%",height:"3%"}} />
                            <img src={namefield} className="tooltiptext" style={{width:"600px",height:"150px"}}  />
                         </span>
                         : ""}
                           <br/>
                           </div>
 
                          <div>
                          <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherMiddleName1}
                               name = "OtherMiddleName1"
                               id = "OtherMiddleName1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherMiddleName1", "#OtherMiddleName1")}
                               onChange = {this.handleOtherMiddleName1}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherMiddleName2}
                               name = "OtherMiddleName2"
                               id = "OtherMiddleName2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherMiddleName1", "#OtherMiddleName2")}
                               onChange = {this.handleOtherMiddleName2}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherMiddleName3}
                               name = "OtherMiddleName3"
                               id = "OtherMiddleName3"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherMiddleName2", "#OtherMiddleName3")}
                               onChange = {this.handleOtherMiddleName3}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherMiddleName4}
                               name = "OtherMiddleName4"
                               id = "OtherMiddleName4"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherMiddleName3", "#OtherMiddleName4")}
                               onChange = {this.handleOtherMiddleName4}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherMiddleName5}
                               name = "OtherMiddleName5"
                               id = "OtherMiddleName5"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherMiddleName4", "#OtherMiddleName5")}
                               onChange = {this.handleOtherMiddleName5}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherMiddleName6}
                               name = "OtherMiddleName6"
                               id = "OtherMiddleName6"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherMiddleName5", "#OtherMiddleName6")}
                               onChange = {this.handleOtherMiddleName6}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherMiddleName7}
                               name = "OtherMiddleName7"
                               id = "OtherMiddleName7"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherMiddleName6", "#OtherMiddleName7")}
                               onChange = {this.handleOtherMiddleName7}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherMiddleName8}
                               name = "OtherMiddleName8"
                               id = "OtherMiddleName8"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherMiddleName7", "#OtherMiddleName8")}
                               onChange = {this.handleOtherMiddleName8}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherMiddleName9}
                               name = "OtherMiddleName9"
                               id = "OtherMiddleName9"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherMiddleName8", "#OtherMiddleName9")}
                               onChange = {this.handleOtherMiddleName9}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherMiddleName10}
                               name = "OtherMiddleName10"
                               id = "OtherMiddleName10"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherMiddleName9", "#OtherMiddleName10")}
                               onChange = {this.handleOtherMiddleName10}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherMiddleName11}
                               name = "OtherMiddleName11"
                               id = "OtherMiddleName11"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherMiddleName10", "#OtherMiddleName11")}
                               onChange = {this.handleOtherMiddleName11}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherMiddleName12}
                               name = "OtherMiddleName12"
                               id = "OtherMiddleName12"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherMiddleName11", "#OtherMiddleName12")}
                               onChange = {this.handleOtherMiddleName12}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherMiddleName13}
                               name = "OtherMiddleName13"
                               id = "OtherMiddleName13"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherMiddleName12", "#OtherMiddleName13")}
                               onChange = {this.handleOtherMiddleName13}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherMiddleName14}
                               name = "OtherMiddleName14"
                               id = "OtherMiddleName14"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherMiddleName13", "#OtherMiddleName14")}
                               onChange = {this.handleOtherMiddleName14}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherMiddleName15}
                               name = "OtherMiddleName15"
                               id = "OtherMiddleName15"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherMiddleName14", "#OtherMiddleName15")}
                               onChange = {this.handleOtherMiddleName15}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherMiddleName16}
                               name = "OtherMiddleName16"
                               id = "OtherMiddleName16"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherMiddleName15", "#OtherMiddleName16")}
                               onChange = {this.handleOtherMiddleName16}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherMiddleName17}
                               name = "OtherMiddleName17"
                               id = "OtherMiddleName17"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherMiddleName16", "#OtherMiddleName17")}
                               onChange = {this.handleOtherMiddleName17}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherMiddleName18}
                               name = "OtherMiddleName18"
                               id = "OtherMiddleName18"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherMiddleName17", "#OtherMiddleName18")}
                               onChange = {this.handleOtherMiddleName18}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherMiddleName19}
                               name = "OtherMiddleName19"
                               id = "OtherMiddleName19"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherMiddleName18", "#OtherMiddleName19")}
                               onChange = {this.handleOtherMiddleName19}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherMiddleName20}
                               name = "OtherMiddleName20"
                               id = "OtherMiddleName20"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherMiddleName19", "#OtherMiddleName20")}
                               onChange = {this.handleOtherMiddleName20}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherMiddleName21}
                               name = "OtherMiddleName21"
                               id = "OtherMiddleName21"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherMiddleName20", "#OtherMiddleName21")}
                               onChange = {this.handleOtherMiddleName21}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherMiddleName22}
                               name = "OtherMiddleName22"
                               id = "OtherMiddleName22"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherMiddleName21", "#OtherMiddleName22")}
                               onChange = {this.handleOtherMiddleName22}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherMiddleName23}
                               name = "OtherMiddleName23"
                               id = "OtherMiddleName23"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherMiddleName22", "#OtherMiddleName23")}
                               onChange = {this.handleOtherMiddleName23}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherMiddleName24}
                               name = "OtherMiddleName24"
                               id = "OtherMiddleName24"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherMiddleName23", "#OtherMiddleName24")}
                               onChange = {this.handleOtherMiddleName24}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OtherMiddleName25}
                               name = "OtherMiddleName25"
                               id = "OtherMiddleName25"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OtherMiddleName24", "#OtherMiddleName25")}
                               onChange = {this.handleOtherMiddleName25}/>
                        
                        {this.state.isIndicatorEnabled === false ? 
                         <span className="tooltip" style={{marginLeft:"3%"}}>
                          <img src={indicator} style={{width:"3%",height:"3%"}} />
                            <img src={namefield} className="tooltiptext" style={{width:"600px",height:"150px"}}  />
                         </span>
                         : ""}
                          <br/>
                          
                           </div>
                         </td>
                      </tr>
                   </tbody>
                   </table>
                   </div>
                    
                   <span className="ErrorMsg">{this.state.errors.OtherName}</span>
                   <span className="ErrorMsg">{this.state.errors.NameTitleTwo}</span>
                   
   

                  {/* Fourth Component */}
                  
                   <div className = "ColouredLabel">
                         <label>&nbsp;&nbsp; 4 &nbsp; Gender (for Individual applicants only)</label>
                         <input 
                           type="checkbox" 
                           className="Check" 
                           id= "11"
                           name= "Gender[4][]"
                           value = "Male"
                           onClick = {(e) => this.handleGenderCheck(e, "Gender")}/>
                         <label className="Label_with_no_space"> Male</label>

                         <input 
                           type="checkbox" 
                           className="Check" 
                           id= "12"
                           name= "Gender[4][]"
                           value = "Female"
                           onClick = {(e) => this.handleGenderCheck(e, "Gender")}/>
                         <label className="Label_with_no_space"> Female</label>

                         <input 
                           type="checkbox" 
                           className="Check" 
                           id= "13"
                           name= "Gender[4][]"
                           value = "Transgender"
                           onClick = {(e) => this.handleGenderCheck(e, "Gender")}/>
                         <label className="Label_with_no_space"> Transgender</label>
                        
                         <label className="Label_with_no_space Move_End1"> (please tick as applicable)</label> 
                         {this.state.isIndicatorEnabled === false ? 
                         <span className="tooltip" style={{marginLeft:"5.2%"}}>
                          <img src={indicator} style={{width:"2%",height:"2%", marginLeft: "4.5%"}} />
                            <label className="tooltiptext tooltiptextLabel" style={{width:"450px",height:"20px", fontSize : "17px", fontWeight: "inherit"}}>This field is mandatory for Individuals.</label>
                         </span>
                         : ""}
                   </div>
                   
                   <span className="ErrorMsg">{this.state.errors.Gender}</span>

                   {/* Fifth Component */}

                   <div className = "ColouredLabel Top_space" > 
                        <label> &nbsp;&nbsp; 5 &nbsp; Date of Birth/Incorporation/Agreement/Partnership or 
                          Trust Deed/ Formation of Body of individuals or Association of Persons</label>
                   </div>

                   <div className= "divfive">
                       <table>
                       <tbody>
                          <tr>
                            <td  className ="Day_td">
                              <label  className ="Day" >Day </label>
                            </td>
                            <td className="Month_td" >
                               <label className = "Month">Month</label>
                            </td>
                            <td className = "Year_td">
                               <label className = "Year">Year</label>
                            </td>
                          </tr>

                          <tr>
                            <td >
                            <input 
                               type="text" 
                               className="Day-control"
                               maxLength = "1"
                               value = {this.state.data.Day1}
                               name = "Day1"
                               id = "Day1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#Day1", "#Day1")}
                               onChange = {this.handleDay1}/>

                            <input 
                               type="text" 
                               className="Day-control"
                               maxLength = "1"
                               value = {this.state.data.Day2}
                               name = "Day2"
                               id = "Day2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#Day1", "#Day2")}
                               onChange = {this.handleDay2}/>

                            
                           </td>  
                           <td >
                           <input 
                               type="text" 
                               className="Month-control"
                               maxLength = "1"
                               value = {this.state.data.Month1}
                               name = "Month1"
                               id = "Month1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#Month1", "#Month1")}
                               onChange = {this.handleMonth1}/>

                            <input 
                               type="text" 
                               className="Month-control"
                               maxLength = "1"
                               value = {this.state.data.Month2}
                               name = "Month2"
                               id = "Month2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#Month1", "#Month2")}
                               onChange = {this.handleMonth2}/>

                           </td>
                           <td className = "Year_td">
                           <input 
                               type="text" 
                               className="Year-control"
                               maxLength = "1"
                               value = {this.state.data.Year1}
                               name = "Year1"
                               id = "Year1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#Year1", "#Year1")}
                               onChange = {this.handleYear1}/>

                            <input 
                               type="text" 
                               className="Year-control"
                               maxLength = "1"
                               value = {this.state.data.Year2}
                               name = "Year2"
                               id = "Year2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#Year1", "#Year2")}
                               onChange = {this.handleYear2}/>

                            <input 
                               type="text" 
                               className="Year-control"
                               maxLength = "1"
                               value = {this.state.data.Year3}
                               name = "Year3"
                               id = "Year3"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#Year2", "#Year3")}
                               onChange = {this.handleYear3}/>

                            <input 
                               type="text" 
                               className="Year-control"
                               maxLength = "1"
                               value = {this.state.data.Year4}
                               name = "Year4"
                               id = "Year4"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#Year3", "#Year4")}
                               onChange = {this.handleYear4}/>

                           </td>

                           {this.state.isIndicatorEnabled === false ? 
                           <span className="tooltip" style={{marginLeft:"89%"}}>
                          <img src={indicator} style={{width:"2.3%",height:"2.3%"}} />
                            <img src={datefield} className="tooltiptext" style={{width:"600px",height:"200px"}}  />
                         </span>
                         : ""}
                          </tr>
                       </tbody>
                       </table>

            
                    </div>

                   {/* Sixth Component */}

                   <div className = "ColouredLabel">

                      <label >&nbsp;&nbsp; 6 &nbsp;  Details of Parents (applicable only for individual applicants)</label>
                   </div>

                   <label className="FirstLabel Bold">Father’s Name (Mandatory. Even married women should fill in father’s name only)</label><br />
                   
                    <table>
                    <tbody>
                      <tr>
                         <td className ="first_td">
                            {this.state.name.map((data, index) =>
                               <label className="elements"> {data}  <br/></label>   
                            )}
                         </td>

                         <td className = "secondtd">
                           <div> 
                           <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherLastName1}
                               name = "FatherLastName1"
                               id = "FatherLastName1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherLastName1", "#FatherLastName1")}
                               onChange = {this.handleFatherLastName1}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherLastName2}
                               name = "FatherLastName2"
                               id = "FatherLastName2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherLastName1", "#FatherLastName2")}
                               onChange = {this.handleFatherLastName2}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherLastName3}
                               name = "FatherLastName3"
                               id = "FatherLastName3"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherLastName2", "#FatherLastName3")}
                               onChange = {this.handleFatherLastName3}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherLastName4}
                               name = "FatherLastName4"
                               id = "FatherLastName4"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherLastName3", "#FatherLastName4")}
                               onChange = {this.handleFatherLastName4}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherLastName5}
                               name = "FatherLastName5"
                               id = "FatherLastName5"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherLastName4", "#FatherLastName5")}
                               onChange = {this.handleFatherLastName5}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherLastName6}
                               name = "FatherLastName6"
                               id = "FatherLastName6"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherLastName5", "#FatherLastName6")}
                               onChange = {this.handleFatherLastName6}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherLastName7}
                               name = "FatherLastName7"
                               id = "FatherLastName7"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherLastName6", "#FatherLastName7")}
                               onChange = {this.handleFatherLastName7}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherLastName8}
                               name = "FatherLastName8"
                               id = "FatherLastName8"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherLastName7", "#FatherLastName8")}
                               onChange = {this.handleFatherLastName8}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherLastName9}
                               name = "FatherLastName9"
                               id = "FatherLastName9"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherLastName8", "#FatherLastName9")}
                               onChange = {this.handleFatherLastName9}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherLastName10}
                               name = "FatherLastName10"
                               id = "FatherLastName10"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherLastName9", "#FatherLastName10")}
                               onChange = {this.handleFatherLastName10}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherLastName11}
                               name = "FatherLastName11"
                               id = "FatherLastName11"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherLastName10", "#FatherLastName11")}
                               onChange = {this.handleFatherLastName11}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherLastName12}
                               name = "FatherLastName12"
                               id = "FatherLastName12"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherLastName11", "#FatherLastName12")}
                               onChange = {this.handleFatherLastName12}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherLastName13}
                               name = "FatherLastName13"
                               id = "FatherLastName13"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherLastName12", "#FatherLastName13")}
                               onChange = {this.handleFatherLastName13}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherLastName14}
                               name = "FatherLastName14"
                               id = "FatherLastName14"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherLastName13", "#FatherLastName14")}
                               onChange = {this.handleFatherLastName14}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherLastName15}
                               name = "FatherLastName15"
                               id = "FatherLastName15"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherLastName14", "#FatherLastName15")}
                               onChange = {this.handleFatherLastName15}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherLastName16}
                               name = "FatherLastName16"
                               id = "FatherLastName16"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherLastName15", "#FatherLastName16")}
                               onChange = {this.handleFatherLastName16}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherLastName17}
                               name = "FatherLastName17"
                               id = "FatherLastName17"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherLastName16", "#FatherLastName17")}
                               onChange = {this.handleFatherLastName17}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherLastName18}
                               name = "FatherLastName18"
                               id = "FatherLastName18"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherLastName17", "#FatherLastName18")}
                               onChange = {this.handleFatherLastName18}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherLastName19}
                               name = "FatherLastName19"
                               id = "FatherLastName19"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherLastName18", "#FatherLastName19")}
                               onChange = {this.handleFatherLastName19}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherLastName20}
                               name = "FatherLastName20"
                               id = "FatherLastName20"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherLastName19", "#FatherLastName20")}
                               onChange = {this.handleFatherLastName20}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherLastName21}
                               name = "FatherLastName21"
                               id = "FatherLastName21"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherLastName20", "#FatherLastName21")}
                               onChange = {this.handleFatherLastName21}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherLastName22}
                               name = "FatherLastName22"
                               id = "FatherLastName22"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherLastName21", "#FatherLastName22")}
                               onChange = {this.handleFatherLastName22}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherLastName23}
                               name = "FatherLastName23"
                               id = "FatherLastName23"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherLastName22", "#FatherLastName23")}
                               onChange = {this.handleFatherLastName23}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherLastName24}
                               name = "FatherLastName24"
                               id = "FatherLastName24"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherLastName23", "#FatherLastName24")}
                               onChange = {this.handleFatherLastName24}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherLastName25}
                               name = "FatherLastName25"
                               id = "FatherLastName25"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherLastName24", "#FatherLastName25")}
                               onChange = {this.handleFatherLastName25}/>

                          {this.state.isIndicatorEnabled === false ? 
                           <span className="tooltip" style={{marginLeft:"3%"}}>
                          <img src={indicator} style={{width:"3%",height:"3%"}} />
                            <img src={namefield} className="tooltiptext" style={{width:"600px",height:"150px"}}  />
                         </span>
                         : ""}
                          <br/>
                           </div>
                           
                           <div>
                           <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherFirstName1}
                               name = "FatherFirstName1"
                               id = "FatherFirstName1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherFirstName1", "#FatherFirstName1")}
                               onChange = {this.handleFatherFirstName1}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherFirstName2}
                               name = "FatherFirstName2"
                               id = "FatherFirstName2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherFirstName1", "#FatherFirstName2")}
                               onChange = {this.handleFatherFirstName2}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherFirstName3}
                               name = "FatherFirstName3"
                               id = "FatherFirstName3"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherFirstName2", "#FatherFirstName3")}
                               onChange = {this.handleFatherFirstName3}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherFirstName4}
                               name = "FatherFirstName4"
                               id = "FatherFirstName4"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherFirstName3", "#FatherFirstName4")}
                               onChange = {this.handleFatherFirstName4}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherFirstName5}
                               name = "FatherFirstName5"
                               id = "FatherFirstName5"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherFirstName4", "#FatherFirstName5")}
                               onChange = {this.handleFatherFirstName5}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherFirstName6}
                               name = "FatherFirstName6"
                               id = "FatherFirstName6"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherFirstName5", "#FatherFirstName6")}
                               onChange = {this.handleFatherFirstName6}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherFirstName7}
                               name = "FatherFirstName7"
                               id = "FatherFirstName7"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherFirstName6", "#FatherFirstName7")}
                               onChange = {this.handleFatherFirstName7}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherFirstName8}
                               name = "FatherFirstName8"
                               id = "FatherFirstName8"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherFirstName7", "#FatherFirstName8")}
                               onChange = {this.handleFatherFirstName8}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherFirstName9}
                               name = "FatherFirstName9"
                               id = "FatherFirstName9"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherFirstName8", "#FatherFirstName9")}
                               onChange = {this.handleFatherFirstName9}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherFirstName10}
                               name = "FatherFirstName10"
                               id = "FatherFirstName10"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherFirstName9", "#FatherFirstName10")}
                               onChange = {this.handleFatherFirstName10}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherFirstName11}
                               name = "FatherFirstName11"
                               id = "FatherFirstName11"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherFirstName10", "#FatherFirstName11")}
                               onChange = {this.handleFatherFirstName11}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherFirstName12}
                               name = "FatherFirstName12"
                               id = "FatherFirstName12"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherFirstName11", "#FatherFirstName12")}
                               onChange = {this.handleFatherFirstName12}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherFirstName13}
                               name = "FatherFirstName13"
                               id = "FatherFirstName13"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherFirstName12", "#FatherFirstName13")}
                               onChange = {this.handleFatherFirstName13}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherFirstName14}
                               name = "FatherFirstName14"
                               id = "FatherFirstName14"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherFirstName13", "#FatherFirstName14")}
                               onChange = {this.handleFatherFirstName14}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherFirstName15}
                               name = "FatherFirstName15"
                               id = "FatherFirstName15"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherFirstName14", "#FatherFirstName15")}
                               onChange = {this.handleFatherFirstName15}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherFirstName16}
                               name = "FatherFirstName16"
                               id = "FatherFirstName16"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherFirstName15", "#FatherFirstName16")}
                               onChange = {this.handleFatherFirstName16}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherFirstName17}
                               name = "FatherFirstName17"
                               id = "FatherFirstName17"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherFirstName16", "#FatherFirstName17")}
                               onChange = {this.handleFatherFirstName17}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherFirstName18}
                               name = "FatherFirstName18"
                               id = "FatherFirstName18"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherFirstName17", "#FatherFirstName18")}
                               onChange = {this.handleFatherFirstName18}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherFirstName19}
                               name = "FatherFirstName19"
                               id = "FatherFirstName19"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherFirstName18", "#FatherFirstName19")}
                               onChange = {this.handleFatherFirstName19}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherFirstName20}
                               name = "FatherFirstName20"
                               id = "FatherFirstName20"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherFirstName19", "#FatherFirstName20")}
                               onChange = {this.handleFatherFirstName20}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherFirstName21}
                               name = "FatherFirstName21"
                               id = "FatherFirstName21"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherFirstName20", "#FatherFirstName21")}
                               onChange = {this.handleFatherFirstName21}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherFirstName22}
                               name = "FatherFirstName22"
                               id = "FatherFirstName22"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherFirstName21", "#FatherFirstName22")}
                               onChange = {this.handleFatherFirstName22}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherFirstName23}
                               name = "FatherFirstName23"
                               id = "FatherFirstName23"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherFirstName22", "#FatherFirstName23")}
                               onChange = {this.handleFatherFirstName23}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherFirstName24}
                               name = "FatherFirstName24"
                               id = "FatherFirstName24"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherFirstName23", "#FatherFirstName24")}
                               onChange = {this.handleFatherFirstName24}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherFirstName25}
                               name = "FatherFirstName25"
                               id = "FatherFirstName25"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherFirstName24", "#FatherFirstName25")}
                               onChange = {this.handleFatherFirstName25}/>
                          {this.state.isIndicatorEnabled === false ? 
                           <span className="tooltip" style={{marginLeft:"3%"}}>
                          <img src={indicator} style={{width:"3%",height:"3%"}} />
                            <img src={namefield} className="tooltiptext" style={{width:"600px",height:"150px"}}  />
                         </span>
                         : ""}
                          <br/>
                           </div>

                           <div>
                           <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherMiddleName1}
                               name = "FatherMiddleName1"
                               id = "FatherMiddleName1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherMiddleName1", "#FatherMiddleName1")}
                               onChange = {this.handleFatherMiddleName1}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherMiddleName2}
                               name = "FatherMiddleName2"
                               id = "FatherMiddleName2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherMiddleName1", "#FatherMiddleName2")}
                               onChange = {this.handleFatherMiddleName2}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherMiddleName3}
                               name = "FatherMiddleName3"
                               id = "FatherMiddleName3"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherMiddleName2", "#FatherMiddleName3")}
                               onChange = {this.handleFatherMiddleName3}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherMiddleName4}
                               name = "FatherMiddleName4"
                               id = "FatherMiddleName4"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherMiddleName3", "#FatherMiddleName4")}
                               onChange = {this.handleFatherMiddleName4}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherMiddleName5}
                               name = "FatherMiddleName5"
                               id = "FatherMiddleName5"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherMiddleName4", "#FatherMiddleName5")}
                               onChange = {this.handleFatherMiddleName5}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherMiddleName6}
                               name = "FatherMiddleName6"
                               id = "FatherMiddleName6"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherMiddleName5", "#FatherMiddleName6")}
                               onChange = {this.handleFatherMiddleName6}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherMiddleName7}
                               name = "FatherMiddleName7"
                               id = "FatherMiddleName7"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherMiddleName6", "#FatherMiddleName7")}
                               onChange = {this.handleFatherMiddleName7}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherMiddleName8}
                               name = "FatherMiddleName8"
                               id = "FatherMiddleName8"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherMiddleName7", "#FatherMiddleName8")}
                               onChange = {this.handleFatherMiddleName8}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherMiddleName9}
                               name = "FatherMiddleName9"
                               id = "FatherMiddleName9"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherMiddleName8", "#FatherMiddleName9")}
                               onChange = {this.handleFatherMiddleName9}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherMiddleName10}
                               name = "FatherMiddleName10"
                               id = "FatherMiddleName10"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherMiddleName9", "#FatherMiddleName10")}
                               onChange = {this.handleFatherMiddleName10}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherMiddleName11}
                               name = "FatherMiddleName11"
                               id = "FatherMiddleName11"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherMiddleName10", "#FatherMiddleName11")}
                               onChange = {this.handleFatherMiddleName11}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherMiddleName12}
                               name = "FatherMiddleName12"
                               id = "FatherMiddleName12"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherMiddleName11", "#FatherMiddleName12")}
                               onChange = {this.handleFatherMiddleName12}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherMiddleName13}
                               name = "FatherMiddleName13"
                               id = "FatherMiddleName13"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherMiddleName12", "#FatherMiddleName13")}
                               onChange = {this.handleFatherMiddleName13}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherMiddleName14}
                               name = "FatherMiddleName14"
                               id = "FatherMiddleName14"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherMiddleName13", "#FatherMiddleName14")}
                               onChange = {this.handleFatherMiddleName14}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherMiddleName15}
                               name = "FatherMiddleName15"
                               id = "FatherMiddleName15"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherMiddleName14", "#FatherMiddleName15")}
                               onChange = {this.handleFatherMiddleName15}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherMiddleName16}
                               name = "FatherMiddleName16"
                               id = "FatherMiddleName16"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherMiddleName15", "#FatherMiddleName16")}
                               onChange = {this.handleFatherMiddleName16}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherMiddleName17}
                               name = "FatherMiddleName17"
                               id = "FatherMiddleName17"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherMiddleName16", "#FatherMiddleName17")}
                               onChange = {this.handleFatherMiddleName17}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherMiddleName18}
                               name = "FatherMiddleName18"
                               id = "FatherMiddleName18"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherMiddleName17", "#FatherMiddleName18")}
                               onChange = {this.handleFatherMiddleName18}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherMiddleName19}
                               name = "FatherMiddleName19"
                               id = "FatherMiddleName19"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherMiddleName18", "#FatherMiddleName19")}
                               onChange = {this.handleFatherMiddleName19}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherMiddleName20}
                               name = "FatherMiddleName20"
                               id = "FatherMiddleName20"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherMiddleName19", "#FatherMiddleName20")}
                               onChange = {this.handleFatherMiddleName20}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherMiddleName21}
                               name = "FatherMiddleName21"
                               id = "FatherMiddleName21"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherMiddleName20", "#FatherMiddleName21")}
                               onChange = {this.handleFatherMiddleName21}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherMiddleName22}
                               name = "FatherMiddleName22"
                               id = "FatherMiddleName22"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherMiddleName21", "#FatherMiddleName22")}
                               onChange = {this.handleFatherMiddleName22}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherMiddleName23}
                               name = "FatherMiddleName23"
                               id = "FatherMiddleName23"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherMiddleName22", "#FatherMiddleName23")}
                               onChange = {this.handleFatherMiddleName23}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherMiddleName24}
                               name = "FatherMiddleName24"
                               id = "FatherMiddleName24"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherMiddleName23", "#FatherMiddleName24")}
                               onChange = {this.handleFatherMiddleName24}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.FatherMiddleName25}
                               name = "FatherMiddleName25"
                               id = "FatherMiddleName25"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#FatherMiddleName24", "#FatherMiddleName25")}
                               onChange = {this.handleFatherMiddleName25}/>
                       {this.state.isIndicatorEnabled === false ? 
                       <span className="tooltip" style={{marginLeft:"3%"}}>
                          <img src={indicator} style={{width:"3%",height:"3%"}} />
                            <img src={namefield} className="tooltiptext" style={{width:"600px",height:"150px"}}  />
                         </span>
                         : ""}
                          <br/>
                            </div>
                         </td>
                      </tr>
                    </tbody>
                    </table>
                    
                    <label className="FirstLabel Bold">Mother’s Name (optional)</label><br />

                    <table>
                    <tbody>
                      <tr>
                         <td className ="first_td">
                            {this.state.name.map((data, index) =>
                               <label className="elements"> {data}  <br/></label>   
                            )}
                         </td>

                         <td className = "secondtd">
                         <div>
                         <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherLastName1}
                               name = "MotherLastName1"
                               id = "MotherLastName1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherLastName1", "#MotherLastName1")}
                               onChange = {this.handleMotherLastName1}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherLastName2}
                               name = "MotherLastName2"
                               id = "MotherLastName2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherLastName1", "#MotherLastName2")}
                               onChange = {this.handleMotherLastName2}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherLastName3}
                               name = "MotherLastName3"
                               id = "MotherLastName3"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherLastName2", "#MotherLastName3")}
                               onChange = {this.handleMotherLastName3}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherLastName4}
                               name = "MotherLastName4"
                               id = "MotherLastName4"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherLastName3", "#MotherLastName4")}
                               onChange = {this.handleMotherLastName4}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherLastName5}
                               name = "MotherLastName5"
                               id = "MotherLastName5"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherLastName4", "#MotherLastName5")}
                               onChange = {this.handleMotherLastName5}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherLastName6}
                               name = "MotherLastName6"
                               id = "MotherLastName6"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherLastName5", "#MotherLastName6")}
                               onChange = {this.handleMotherLastName6}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherLastName7}
                               name = "MotherLastName7"
                               id = "MotherLastName7"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherLastName6", "#MotherLastName7")}
                               onChange = {this.handleMotherLastName7}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherLastName8}
                               name = "MotherLastName8"
                               id = "MotherLastName8"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherLastName7", "#MotherLastName8")}
                               onChange = {this.handleMotherLastName8}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherLastName9}
                               name = "MotherLastName9"
                               id = "MotherLastName9"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherLastName8", "#MotherLastName9")}
                               onChange = {this.handleMotherLastName9}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherLastName10}
                               name = "MotherLastName10"
                               id = "MotherLastName10"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherLastName9", "#MotherLastName10")}
                               onChange = {this.handleMotherLastName10}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherLastName11}
                               name = "MotherLastName11"
                               id = "MotherLastName11"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherLastName10", "#MotherLastName11")}
                               onChange = {this.handleMotherLastName11}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherLastName12}
                               name = "MotherLastName12"
                               id = "MotherLastName12"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherLastName11", "#MotherLastName12")}
                               onChange = {this.handleMotherLastName12}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherLastName13}
                               name = "MotherLastName13"
                               id = "MotherLastName13"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherLastName12", "#MotherLastName13")}
                               onChange = {this.handleMotherLastName13}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherLastName14}
                               name = "MotherLastName14"
                               id = "MotherLastName14"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherLastName13", "#MotherLastName14")}
                               onChange = {this.handleMotherLastName14}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherLastName15}
                               name = "MotherLastName15"
                               id = "MotherLastName15"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherLastName14", "#MotherLastName15")}
                               onChange = {this.handleMotherLastName15}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherLastName16}
                               name = "MotherLastName16"
                               id = "MotherLastName16"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherLastName15", "#MotherLastName16")}
                               onChange = {this.handleMotherLastName16}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherLastName17}
                               name = "MotherLastName17"
                               id = "MotherLastName17"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherLastName16", "#MotherLastName17")}
                               onChange = {this.handleMotherLastName17}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherLastName18}
                               name = "MotherLastName18"
                               id = "MotherLastName18"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherLastName17", "#MotherLastName18")}
                               onChange = {this.handleMotherLastName18}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherLastName19}
                               name = "MotherLastName19"
                               id = "MotherLastName19"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherLastName18", "#MotherLastName19")}
                               onChange = {this.handleMotherLastName19}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherLastName20}
                               name = "MotherLastName20"
                               id = "MotherLastName20"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherLastName19", "#MotherLastName20")}
                               onChange = {this.handleMotherLastName20}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherLastName21}
                               name = "MotherLastName21"
                               id = "MotherLastName21"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherLastName20", "#MotherLastName21")}
                               onChange = {this.handleMotherLastName21}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherLastName22}
                               name = "MotherLastName22"
                               id = "MotherLastName22"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherLastName21", "#MotherLastName22")}
                               onChange = {this.handleMotherLastName22}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherLastName23}
                               name = "MotherLastName23"
                               id = "MotherLastName23"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherLastName22", "#MotherLastName23")}
                               onChange = {this.handleMotherLastName23}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherLastName24}
                               name = "MotherLastName24"
                               id = "MotherLastName24"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherLastName23", "#MotherLastName24")}
                               onChange = {this.handleMotherLastName24}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherLastName25}
                               name = "MotherLastName25"
                               id = "MotherLastName25"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherLastName24", "#MotherLastName25")}
                               onChange = {this.handleMotherLastName25}/>

                        {this.state.isIndicatorEnabled === false ? 
                        <span className="tooltip" style={{marginLeft:"3%"}}>
                          <img src={indicator} style={{width:"3%",height:"3%"}} />
                            <img src={namefield} className="tooltiptext" style={{width:"600px",height:"150px"}}  />
                         </span>
                         : ""}
                           <br/>
                           </div>


                           <div>  
                          <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherFirstName1}
                               name = "MotherFirstName1"
                               id = "MotherFirstName1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherFirstName1", "#MotherFirstName1")}
                               onChange = {this.handleMotherFirstName1}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherFirstName2}
                               name = "MotherFirstName2"
                               id = "MotherFirstName2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherFirstName1", "#MotherFirstName2")}
                               onChange = {this.handleMotherFirstName2}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherFirstName3}
                               name = "MotherFirstName3"
                               id = "MotherFirstName3"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherFirstName2", "#MotherFirstName3")}
                               onChange = {this.handleMotherFirstName3}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherFirstName4}
                               name = "MotherFirstName4"
                               id = "MotherFirstName4"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherFirstName3", "#MotherFirstName4")}
                               onChange = {this.handleMotherFirstName4}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherFirstName5}
                               name = "MotherFirstName5"
                               id = "MotherFirstName5"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherFirstName4", "#MotherFirstName5")}
                               onChange = {this.handleMotherFirstName5}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherFirstName6}
                               name = "MotherFirstName6"
                               id = "MotherFirstName6"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherFirstName5", "#MotherFirstName6")}
                               onChange = {this.handleMotherFirstName6}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherFirstName7}
                               name = "MotherFirstName7"
                               id = "MotherFirstName7"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherFirstName6", "#MotherFirstName7")}
                               onChange = {this.handleMotherFirstName7}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherFirstName8}
                               name = "MotherFirstName8"
                               id = "MotherFirstName8"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherFirstName7", "#MotherFirstName8")}
                               onChange = {this.handleMotherFirstName8}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherFirstName9}
                               name = "MotherFirstName9"
                               id = "MotherFirstName9"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherFirstName8", "#MotherFirstName9")}
                               onChange = {this.handleMotherFirstName9}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherFirstName10}
                               name = "MotherFirstName10"
                               id = "MotherFirstName10"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherFirstName9", "#MotherFirstName10")}
                               onChange = {this.handleMotherFirstName10}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherFirstName11}
                               name = "MotherFirstName11"
                               id = "MotherFirstName11"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherFirstName10", "#MotherFirstName11")}
                               onChange = {this.handleMotherFirstName11}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherFirstName12}
                               name = "MotherFirstName12"
                               id = "MotherFirstName12"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherFirstName11", "#MotherFirstName12")}
                               onChange = {this.handleMotherFirstName12}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherFirstName13}
                               name = "MotherFirstName13"
                               id = "MotherFirstName13"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherFirstName12", "#MotherFirstName13")}
                               onChange = {this.handleMotherFirstName13}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherFirstName14}
                               name = "MotherFirstName14"
                               id = "MotherFirstName14"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherFirstName13", "#MotherFirstName14")}
                               onChange = {this.handleMotherFirstName14}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherFirstName15}
                               name = "MotherFirstName15"
                               id = "MotherFirstName15"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherFirstName14", "#MotherFirstName15")}
                               onChange = {this.handleMotherFirstName15}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherFirstName16}
                               name = "MotherFirstName16"
                               id = "MotherFirstName16"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherFirstName15", "#MotherFirstName16")}
                               onChange = {this.handleMotherFirstName16}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherFirstName17}
                               name = "MotherFirstName17"
                               id = "MotherFirstName17"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherFirstName16", "#MotherFirstName17")}
                               onChange = {this.handleMotherFirstName17}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherFirstName18}
                               name = "MotherFirstName18"
                               id = "MotherFirstName18"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherFirstName17", "#MotherFirstName18")}
                               onChange = {this.handleMotherFirstName18}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherFirstName19}
                               name = "MotherFirstName19"
                               id = "MotherFirstName19"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherFirstName18", "#MotherFirstName19")}
                               onChange = {this.handleMotherFirstName19}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherFirstName20}
                               name = "MotherFirstName20"
                               id = "MotherFirstName20"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherFirstName19", "#MotherFirstName20")}
                               onChange = {this.handleMotherFirstName20}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherFirstName21}
                               name = "MotherFirstName21"
                               id = "MotherFirstName21"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherFirstName20", "#MotherFirstName21")}
                               onChange = {this.handleMotherFirstName21}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherFirstName22}
                               name = "MotherFirstName22"
                               id = "MotherFirstName22"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherFirstName21", "#MotherFirstName22")}
                               onChange = {this.handleMotherFirstName22}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherFirstName23}
                               name = "MotherFirstName23"
                               id = "MotherFirstName23"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherFirstName22", "#MotherFirstName23")}
                               onChange = {this.handleMotherFirstName23}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherFirstName24}
                               name = "MotherFirstName24"
                               id = "MotherFirstName24"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherFirstName23", "#MotherFirstName24")}
                               onChange = {this.handleMotherFirstName24}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherFirstName25}
                               name = "MotherFirstName25"
                               id = "MotherFirstName25"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherFirstName24", "#MotherFirstName25")}
                               onChange = {this.handleMotherFirstName25}/>
                          {this.state.isIndicatorEnabled === false ? 
                         <span className="tooltip" style={{marginLeft:"3%"}}>
                          <img src={indicator} style={{width:"3%",height:"3%"}} />
                            <img src={namefield} className="tooltiptext" style={{width:"600px",height:"150px"}}  />
                         </span>
                         : ""}
                          <br/>
                           </div>

                           <div>    
                           <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherMiddleName1}
                               name = "MotherMiddleName1"
                               id = "MotherMiddleName1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherMiddleName1", "#MotherMiddleName1")}
                               onChange = {this.handleMotherMiddleName1}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherMiddleName2}
                               name = "MotherMiddleName2"
                               id = "MotherMiddleName2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherMiddleName1", "#MotherMiddleName2")}
                               onChange = {this.handleMotherMiddleName2}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherMiddleName3}
                               name = "MotherMiddleName3"
                               id = "MotherMiddleName3"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherMiddleName2", "#MotherMiddleName3")}
                               onChange = {this.handleMotherMiddleName3}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherMiddleName4}
                               name = "MotherMiddleName4"
                               id = "MotherMiddleName4"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherMiddleName3", "#MotherMiddleName4")}
                               onChange = {this.handleMotherMiddleName4}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherMiddleName5}
                               name = "MotherMiddleName5"
                               id = "MotherMiddleName5"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherMiddleName4", "#MotherMiddleName5")}
                               onChange = {this.handleMotherMiddleName5}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherMiddleName6}
                               name = "MotherMiddleName6"
                               id = "MotherMiddleName6"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherMiddleName5", "#MotherMiddleName6")}
                               onChange = {this.handleMotherMiddleName6}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherMiddleName7}
                               name = "MotherMiddleName7"
                               id = "MotherMiddleName7"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherMiddleName6", "#MotherMiddleName7")}
                               onChange = {this.handleMotherMiddleName7}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherMiddleName8}
                               name = "MotherMiddleName8"
                               id = "MotherMiddleName8"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherMiddleName7", "#MotherMiddleName8")}
                               onChange = {this.handleMotherMiddleName8}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherMiddleName9}
                               name = "MotherMiddleName9"
                               id = "MotherMiddleName9"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherMiddleName8", "#MotherMiddleName9")}
                               onChange = {this.handleMotherMiddleName9}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherMiddleName10}
                               name = "MotherMiddleName10"
                               id = "MotherMiddleName10"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherMiddleName9", "#MotherMiddleName10")}
                               onChange = {this.handleMotherMiddleName10}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherMiddleName11}
                               name = "MotherMiddleName11"
                               id = "MotherMiddleName11"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherMiddleName10", "#MotherMiddleName11")}
                               onChange = {this.handleMotherMiddleName11}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherMiddleName12}
                               name = "MotherMiddleName12"
                               id = "MotherMiddleName12"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherMiddleName11", "#MotherMiddleName12")}
                               onChange = {this.handleMotherMiddleName12}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherMiddleName13}
                               name = "MotherMiddleName13"
                               id = "MotherMiddleName13"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherMiddleName12", "#MotherMiddleName13")}
                               onChange = {this.handleMotherMiddleName13}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherMiddleName14}
                               name = "MotherMiddleName14"
                               id = "MotherMiddleName14"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherMiddleName13", "#MotherMiddleName14")}
                               onChange = {this.handleMotherMiddleName14}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherMiddleName15}
                               name = "MotherMiddleName15"
                               id = "MotherMiddleName15"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherMiddleName14", "#MotherMiddleName15")}
                               onChange = {this.handleMotherMiddleName15}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherMiddleName16}
                               name = "MotherMiddleName16"
                               id = "MotherMiddleName16"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherMiddleName15", "#MotherMiddleName16")}
                               onChange = {this.handleMotherMiddleName16}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherMiddleName17}
                               name = "MotherMiddleName17"
                               id = "MotherMiddleName17"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherMiddleName16", "#MotherMiddleName17")}
                               onChange = {this.handleMotherMiddleName17}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherMiddleName18}
                               name = "MotherMiddleName18"
                               id = "MotherMiddleName18"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherMiddleName17", "#MotherMiddleName18")}
                               onChange = {this.handleMotherMiddleName18}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherMiddleName19}
                               name = "MotherMiddleName19"
                               id = "MotherMiddleName19"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherMiddleName18", "#MotherMiddleName19")}
                               onChange = {this.handleMotherMiddleName19}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherMiddleName20}
                               name = "MotherMiddleName20"
                               id = "MotherMiddleName20"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherMiddleName19", "#MotherMiddleName20")}
                               onChange = {this.handleMotherMiddleName20}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherMiddleName21}
                               name = "MotherMiddleName21"
                               id = "MotherMiddleName21"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherMiddleName20", "#MotherMiddleName21")}
                               onChange = {this.handleMotherMiddleName21}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherMiddleName22}
                               name = "MotherMiddleName22"
                               id = "MotherMiddleName22"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherMiddleName21", "#MotherMiddleName22")}
                               onChange = {this.handleMotherMiddleName22}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherMiddleName23}
                               name = "MotherMiddleName23"
                               id = "MotherMiddleName23"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherMiddleName22", "#MotherMiddleName23")}
                               onChange = {this.handleMotherMiddleName23}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherMiddleName24}
                               name = "MotherMiddleName24"
                               id = "MotherMiddleName24"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherMiddleName23", "#MotherMiddleName24")}
                               onChange = {this.handleMotherMiddleName24}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.MotherMiddleName25}
                               name = "MotherMiddleName25"
                               id = "MotherMiddleName25"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#MotherMiddleName24", "#MotherMiddleName25")}
                               onChange = {this.handleMotherMiddleName25}/>
                        {this.state.isIndicatorEnabled === false ? 
                        <span className="tooltip" style={{marginLeft:"3%"}}>
                          <img src={indicator} style={{width:"3%",height:"3%"}} />
                            <img src={namefield} className="tooltiptext" style={{width:"600px",height:"150px"}}  />
                         </span>
                         :""}
                         <br/>
                            </div>
                         </td>
                      </tr>
                    </tbody>
                    </table>

                    <label className="FirstLabel">  Select the name of either father or mother which you may like to be printed on PAN card (Select one only)</label><br />
                    <label className="FirstLabel">(In case no option is provided then PAN card will be issued with father’s name)</label><br/>
               
                     
                    <input 
                      type="checkbox" 
                      className="Check Center_space"
                      id = "14"
                      name = "ParentName[5][]"
                      value = "Father's name"
                      onClick={(e)=>this.handleParentNameCheck(e,"ParentName")}/>
                    <label className="Label_with_no_space">Father’s name</label> 

                    <input 
                      type="checkbox" 
                      className="Check Left_space"
                      id = "15"
                      value = "Mother's name"
                      name = "ParentName[5][]"
                      onClick={(e)=>this.handleParentNameCheck(e,"ParentName")}/>
                    <label className="Label_with_no_space">Mother’s name</label> 
                    <label className="Italic_text">(Please tick as applicable)</label> 
                    
                    {this.state.isIndicatorEnabled === false ? 
                    <span className="tooltip" style={{marginLeft:"2.4%"}}>
                          <img src={indicator} style={{width:"2%",height:"2%", marginLeft: "1.4%"}} />
                          <img src={parentname} className="tooltiptext" style={{width:"600px",height:"150px"}}  />
                         </span>
                     : ""}
                         <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="ErrorMsg">{this.state.errors.ParentName}</span>


                  {/* Seventh Component */}

                    <div  className = "ColouredLabel">
                       <label> &nbsp;&nbsp; 7 &nbsp; Address </label>
                    </div>

                    <label className="FirstLabel Bold"> Residence Address</label>
                    {/* <span className="tooltip" style={{marginLeft:"75.3%"}}>
                        <img src={indicator} style={{width:"2%",height:"2%"}} />
                        <img src={residencefield} className="tooltiptext" style={{width:"250px",height:"150px"}}  />
                    </span> */}
                         <br />

                    <table>
                    <tbody>
                      <tr>
                         <td className ="first_td">
                            {this.state.addressTwo.map((data, index) =>
                               <label className="elements"> {data}  <br/></label>   
                            )}
                         </td>

                         <td className = "secondtd">
                          <div> 
                          <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceFlat1}
                               name = "ResidenceFlat1"
                               id = "ResidenceFlat1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceFlat1", "#ResidenceFlat1")}
                               onChange = {this.handleResidenceFlat1}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceFlat2}
                               name = "ResidenceFlat2"
                               id = "ResidenceFlat2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceFlat1", "#ResidenceFlat2")}
                               onChange = {this.handleResidenceFlat2}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceFlat3}
                               name = "ResidenceFlat3"
                               id = "ResidenceFlat3"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceFlat2", "#ResidenceFlat3")}
                               onChange = {this.handleResidenceFlat3}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceFlat4}
                               name = "ResidenceFlat4"
                               id = "ResidenceFlat4"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceFlat3", "#ResidenceFlat4")}
                               onChange = {this.handleResidenceFlat4}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceFlat5}
                               name = "ResidenceFlat5"
                               id = "ResidenceFlat5"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceFlat4", "#ResidenceFlat5")}
                               onChange = {this.handleResidenceFlat5}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceFlat6}
                               name = "ResidenceFlat6"
                               id = "ResidenceFlat6"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceFlat5", "#ResidenceFlat6")}
                               onChange = {this.handleResidenceFlat6}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceFlat7}
                               name = "ResidenceFlat7"
                               id = "ResidenceFlat7"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceFlat6", "#ResidenceFlat7")}
                               onChange = {this.handleResidenceFlat7}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceFlat8}
                               name = "ResidenceFlat8"
                               id = "ResidenceFlat8"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceFlat7", "#ResidenceFlat8")}
                               onChange = {this.handleResidenceFlat8}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceFlat9}
                               name = "ResidenceFlat9"
                               id = "ResidenceFlat9"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceFlat8", "#ResidenceFlat9")}
                               onChange = {this.handleResidenceFlat9}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceFlat10}
                               name = "ResidenceFlat10"
                               id = "ResidenceFlat10"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceFlat9", "#ResidenceFlat10")}
                               onChange = {this.handleResidenceFlat10}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceFlat11}
                               name = "ResidenceFlat11"
                               id = "ResidenceFlat11"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceFlat10", "#ResidenceFlat11")}
                               onChange = {this.handleResidenceFlat11}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceFlat12}
                               name = "ResidenceFlat12"
                               id = "ResidenceFlat12"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceFlat11", "#ResidenceFlat12")}
                               onChange = {this.handleResidenceFlat12}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceFlat13}
                               name = "ResidenceFlat13"
                               id = "ResidenceFlat13"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceFlat12", "#ResidenceFlat13")}
                               onChange = {this.handleResidenceFlat13}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceFlat14}
                               name = "ResidenceFlat14"
                               id = "ResidenceFlat14"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceFlat13", "#ResidenceFlat14")}
                               onChange = {this.handleResidenceFlat14}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceFlat15}
                               name = "ResidenceFlat15"
                               id = "ResidenceFlat15"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceFlat14", "#ResidenceFlat15")}
                               onChange = {this.handleResidenceFlat15}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceFlat16}
                               name = "ResidenceFlat16"
                               id = "ResidenceFlat16"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceFlat15", "#ResidenceFlat16")}
                               onChange = {this.handleResidenceFlat16}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceFlat17}
                               name = "ResidenceFlat17"
                               id = "ResidenceFlat17"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceFlat16", "#ResidenceFlat17")}
                               onChange = {this.handleResidenceFlat17}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceFlat18}
                               name = "ResidenceFlat18"
                               id = "ResidenceFlat18"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceFlat17", "#ResidenceFlat18")}
                               onChange = {this.handleResidenceFlat18}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceFlat19}
                               name = "ResidenceFlat19"
                               id = "ResidenceFlat19"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceFlat18", "#ResidenceFlat19")}
                               onChange = {this.handleResidenceFlat19}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceFlat20}
                               name = "ResidenceFlat20"
                               id = "ResidenceFlat20"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceFlat19", "#ResidenceFlat20")}
                               onChange = {this.handleResidenceFlat20}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceFlat21}
                               name = "ResidenceFlat21"
                               id = "ResidenceFlat21"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceFlat20", "#ResidenceFlat21")}
                               onChange = {this.handleResidenceFlat21}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceFlat22}
                               name = "ResidenceFlat22"
                               id = "ResidenceFlat22"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceFlat21", "#ResidenceFlat22")}
                               onChange = {this.handleResidenceFlat22}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceFlat23}
                               name = "ResidenceFlat23"
                               id = "ResidenceFlat23"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceFlat22", "#ResidenceFlat23")}
                               onChange = {this.handleResidenceFlat23}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceFlat24}
                               name = "ResidenceFlat24"
                               id = "ResidenceFlat24"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceFlat23", "#ResidenceFlat24")}
                               onChange = {this.handleResidenceFlat24}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceFlat25}
                               name = "ResidenceFlat25"
                               id = "ResidenceFlat25"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceFlat24", "#ResidenceFlat25")}
                               onChange = {this.handleResidenceFlat25}/>
                             {this.state.isIndicatorEnabled === false ? 
                            <span className="tooltip" style={{marginLeft:"3%"}}>
                          <img src={indicator} style={{width:"3%",height:"3%"}} />
                            <label className="tooltiptext tooltiptextLabel" style={{width:"450px",height:"20px"}}>Please enter combinations of alphabet, numbers , -, /, ' </label>
                         </span> 
                         : ""}
                         <br/>
                           </div>
                             
                           <div>
                           <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidencePremises1}
                               name = "ResidencePremises1"
                               id = "ResidencePremises1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidencePremises1", "#ResidencePremises1")}
                               onChange = {this.handleResidencePremises1}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidencePremises2}
                               name = "ResidencePremises2"
                               id = "ResidencePremises2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidencePremises1", "#ResidencePremises2")}
                               onChange = {this.handleResidencePremises2}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidencePremises3}
                               name = "ResidencePremises3"
                               id = "ResidencePremises3"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidencePremises2", "#ResidencePremises3")}
                               onChange = {this.handleResidencePremises3}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidencePremises4}
                               name = "ResidencePremises4"
                               id = "ResidencePremises4"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidencePremises3", "#ResidencePremises4")}
                               onChange = {this.handleResidencePremises4}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidencePremises5}
                               name = "ResidencePremises5"
                               id = "ResidencePremises5"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidencePremises4", "#ResidencePremises5")}
                               onChange = {this.handleResidencePremises5}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidencePremises6}
                               name = "ResidencePremises6"
                               id = "ResidencePremises6"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidencePremises5", "#ResidencePremises6")}
                               onChange = {this.handleResidencePremises6}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidencePremises7}
                               name = "ResidencePremises7"
                               id = "ResidencePremises7"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidencePremises6", "#ResidencePremises7")}
                               onChange = {this.handleResidencePremises7}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidencePremises8}
                               name = "ResidencePremises8"
                               id = "ResidencePremises8"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidencePremises7", "#ResidencePremises8")}
                               onChange = {this.handleResidencePremises8}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidencePremises9}
                               name = "ResidencePremises9"
                               id = "ResidencePremises9"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidencePremises8", "#ResidencePremises9")}
                               onChange = {this.handleResidencePremises9}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidencePremises10}
                               name = "ResidencePremises10"
                               id = "ResidencePremises10"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidencePremises9", "#ResidencePremises10")}
                               onChange = {this.handleResidencePremises10}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidencePremises11}
                               name = "ResidencePremises11"
                               id = "ResidencePremises11"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidencePremises10", "#ResidencePremises11")}
                               onChange = {this.handleResidencePremises11}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidencePremises12}
                               name = "ResidencePremises12"
                               id = "ResidencePremises12"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidencePremises11", "#ResidencePremises12")}
                               onChange = {this.handleResidencePremises12}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidencePremises13}
                               name = "ResidencePremises13"
                               id = "ResidencePremises13"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidencePremises12", "#ResidencePremises13")}
                               onChange = {this.handleResidencePremises13}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidencePremises14}
                               name = "ResidencePremises14"
                               id = "ResidencePremises14"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidencePremises13", "#ResidencePremises14")}
                               onChange = {this.handleResidencePremises14}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidencePremises15}
                               name = "ResidencePremises15"
                               id = "ResidencePremises15"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidencePremises14", "#ResidencePremises15")}
                               onChange = {this.handleResidencePremises15}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidencePremises16}
                               name = "ResidencePremises16"
                               id = "ResidencePremises16"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidencePremises15", "#ResidencePremises16")}
                               onChange = {this.handleResidencePremises16}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidencePremises17}
                               name = "ResidencePremises17"
                               id = "ResidencePremises17"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidencePremises16", "#ResidencePremises17")}
                               onChange = {this.handleResidencePremises17}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidencePremises18}
                               name = "ResidencePremises18"
                               id = "ResidencePremises18"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidencePremises17", "#ResidencePremises18")}
                               onChange = {this.handleResidencePremises18}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidencePremises19}
                               name = "ResidencePremises19"
                               id = "ResidencePremises19"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidencePremises18", "#ResidencePremises19")}
                               onChange = {this.handleResidencePremises19}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidencePremises20}
                               name = "ResidencePremises20"
                               id = "ResidencePremises20"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidencePremises19", "#ResidencePremises20")}
                               onChange = {this.handleResidencePremises20}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidencePremises21}
                               name = "ResidencePremises21"
                               id = "ResidencePremises21"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidencePremises20", "#ResidencePremises21")}
                               onChange = {this.handleResidencePremises21}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidencePremises22}
                               name = "ResidencePremises22"
                               id = "ResidencePremises22"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidencePremises21", "#ResidencePremises22")}
                               onChange = {this.handleResidencePremises22}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidencePremises23}
                               name = "ResidencePremises23"
                               id = "ResidencePremises23"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidencePremises22", "#ResidencePremises23")}
                               onChange = {this.handleResidencePremises23}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidencePremises24}
                               name = "ResidencePremises24"
                               id = "ResidencePremises24"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidencePremises23", "#ResidencePremises24")}
                               onChange = {this.handleResidencePremises24}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidencePremises25}
                               name = "ResidencePremises25"
                               id = "ResidencePremises25"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidencePremises24", "#ResidencePremises25")}
                               onChange = {this.handleResidencePremises25}/>
                           {this.state.isIndicatorEnabled === false ? 
                            <span className="tooltip" style={{marginLeft:"3%"}}>
                          <img src={indicator} style={{width:"3%",height:"3%"}} />
                            <label className="tooltiptext tooltiptextLabel" style={{width:"450px",height:"20px"}}>Please enter combinations of alphabet, numbers </label>
                         </span> 
                         : ""}
                          <br/>
                           </div>

                           <div> 
                           <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceRoad1}
                               name = "ResidenceRoad1"
                               id = "ResidenceRoad1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceRoad1", "#ResidenceRoad1")}
                               onChange = {this.handleResidenceRoad1}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceRoad2}
                               name = "ResidenceRoad2"
                               id = "ResidenceRoad2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceRoad1", "#ResidenceRoad2")}
                               onChange = {this.handleResidenceRoad2}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceRoad3}
                               name = "ResidenceRoad3"
                               id = "ResidenceRoad3"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceRoad2", "#ResidenceRoad3")}
                               onChange = {this.handleResidenceRoad3}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceRoad4}
                               name = "ResidenceRoad4"
                               id = "ResidenceRoad4"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceRoad3", "#ResidenceRoad4")}
                               onChange = {this.handleResidenceRoad4}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceRoad5}
                               name = "ResidenceRoad5"
                               id = "ResidenceRoad5"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceRoad4", "#ResidenceRoad5")}
                               onChange = {this.handleResidenceRoad5}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceRoad6}
                               name = "ResidenceRoad6"
                               id = "ResidenceRoad6"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceRoad5", "#ResidenceRoad6")}
                               onChange = {this.handleResidenceRoad6}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceRoad7}
                               name = "ResidenceRoad7"
                               id = "ResidenceRoad7"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceRoad6", "#ResidenceRoad7")}
                               onChange = {this.handleResidenceRoad7}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceRoad8}
                               name = "ResidenceRoad8"
                               id = "ResidenceRoad8"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceRoad7", "#ResidenceRoad8")}
                               onChange = {this.handleResidenceRoad8}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceRoad9}
                               name = "ResidenceRoad9"
                               id = "ResidenceRoad9"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceRoad8", "#ResidenceRoad9")}
                               onChange = {this.handleResidenceRoad9}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceRoad10}
                               name = "ResidenceRoad10"
                               id = "ResidenceRoad10"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceRoad9", "#ResidenceRoad10")}
                               onChange = {this.handleResidenceRoad10}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceRoad11}
                               name = "ResidenceRoad11"
                               id = "ResidenceRoad11"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceRoad10", "#ResidenceRoad11")}
                               onChange = {this.handleResidenceRoad11}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceRoad12}
                               name = "ResidenceRoad12"
                               id = "ResidenceRoad12"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceRoad11", "#ResidenceRoad12")}
                               onChange = {this.handleResidenceRoad12}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceRoad13}
                               name = "ResidenceRoad13"
                               id = "ResidenceRoad13"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceRoad12", "#ResidenceRoad13")}
                               onChange = {this.handleResidenceRoad13}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceRoad14}
                               name = "ResidenceRoad14"
                               id = "ResidenceRoad14"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceRoad13", "#ResidenceRoad14")}
                               onChange = {this.handleResidenceRoad14}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceRoad15}
                               name = "ResidenceRoad15"
                               id = "ResidenceRoad15"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceRoad14", "#ResidenceRoad15")}
                               onChange = {this.handleResidenceRoad15}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceRoad16}
                               name = "ResidenceRoad16"
                               id = "ResidenceRoad16"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceRoad15", "#ResidenceRoad16")}
                               onChange = {this.handleResidenceRoad16}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceRoad17}
                               name = "ResidenceRoad17"
                               id = "ResidenceRoad17"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceRoad16", "#ResidenceRoad17")}
                               onChange = {this.handleResidenceRoad17}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceRoad18}
                               name = "ResidenceRoad18"
                               id = "ResidenceRoad18"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceRoad17", "#ResidenceRoad18")}
                               onChange = {this.handleResidenceRoad18}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceRoad19}
                               name = "ResidenceRoad19"
                               id = "ResidenceRoad19"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceRoad18", "#ResidenceRoad19")}
                               onChange = {this.handleResidenceRoad19}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceRoad20}
                               name = "ResidenceRoad20"
                               id = "ResidenceRoad20"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceRoad19", "#ResidenceRoad20")}
                               onChange = {this.handleResidenceRoad20}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceRoad21}
                               name = "ResidenceRoad21"
                               id = "ResidenceRoad21"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceRoad20", "#ResidenceRoad21")}
                               onChange = {this.handleResidenceRoad21}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceRoad22}
                               name = "ResidenceRoad22"
                               id = "ResidenceRoad22"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceRoad21", "#ResidenceRoad22")}
                               onChange = {this.handleResidenceRoad22}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceRoad23}
                               name = "ResidenceRoad23"
                               id = "ResidenceRoad23"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceRoad22", "#ResidenceRoad23")}
                               onChange = {this.handleResidenceRoad23}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceRoad24}
                               name = "ResidenceRoad24"
                               id = "ResidenceRoad24"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceRoad23", "#ResidenceRoad24")}
                               onChange = {this.handleResidenceRoad24}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceRoad25}
                               name = "ResidenceRoad25"
                               id = "ResidenceRoad25"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceRoad24", "#ResidenceRoad25")}
                               onChange = {this.handleResidenceRoad25}/>

                          {this.state.isIndicatorEnabled === false ? 
                            <span className="tooltip" style={{marginLeft:"3%"}}>
                          <img src={indicator} style={{width:"3%",height:"3%"}} />
                            <label className="tooltiptext tooltiptextLabel" style={{width:"450px",height:"20px"}}>Please enter combinations of alphabet, numbers </label>
                         </span>
                         : ""}
                           <br/>
                           </div>
                            
                           <div>
                           <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceArea1}
                               name = "ResidenceArea1"
                               id = "ResidenceArea1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceArea1", "#ResidenceArea1")}
                               onChange = {this.handleResidenceArea1}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceArea2}
                               name = "ResidenceArea2"
                               id = "ResidenceArea2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceArea1", "#ResidenceArea2")}
                               onChange = {this.handleResidenceArea2}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceArea3}
                               name = "ResidenceArea3"
                               id = "ResidenceArea3"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceArea2", "#ResidenceArea3")}
                               onChange = {this.handleResidenceArea3}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceArea4}
                               name = "ResidenceArea4"
                               id = "ResidenceArea4"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceArea3", "#ResidenceArea4")}
                               onChange = {this.handleResidenceArea4}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceArea5}
                               name = "ResidenceArea5"
                               id = "ResidenceArea5"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceArea4", "#ResidenceArea5")}
                               onChange = {this.handleResidenceArea5}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceArea6}
                               name = "ResidenceArea6"
                               id = "ResidenceArea6"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceArea5", "#ResidenceArea6")}
                               onChange = {this.handleResidenceArea6}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceArea7}
                               name = "ResidenceArea7"
                               id = "ResidenceArea7"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceArea6", "#ResidenceArea7")}
                               onChange = {this.handleResidenceArea7}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceArea8}
                               name = "ResidenceArea8"
                               id = "ResidenceArea8"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceArea7", "#ResidenceArea8")}
                               onChange = {this.handleResidenceArea8}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceArea9}
                               name = "ResidenceArea9"
                               id = "ResidenceArea9"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceArea8", "#ResidenceArea9")}
                               onChange = {this.handleResidenceArea9}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceArea10}
                               name = "ResidenceArea10"
                               id = "ResidenceArea10"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceArea9", "#ResidenceArea10")}
                               onChange = {this.handleResidenceArea10}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceArea11}
                               name = "ResidenceArea11"
                               id = "ResidenceArea11"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceArea10", "#ResidenceArea11")}
                               onChange = {this.handleResidenceArea11}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceArea12}
                               name = "ResidenceArea12"
                               id = "ResidenceArea12"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceArea11", "#ResidenceArea12")}
                               onChange = {this.handleResidenceArea12}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceArea13}
                               name = "ResidenceArea13"
                               id = "ResidenceArea13"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceArea12", "#ResidenceArea13")}
                               onChange = {this.handleResidenceArea13}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceArea14}
                               name = "ResidenceArea14"
                               id = "ResidenceArea14"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceArea13", "#ResidenceArea14")}
                               onChange = {this.handleResidenceArea14}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceArea15}
                               name = "ResidenceArea15"
                               id = "ResidenceArea15"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceArea14", "#ResidenceArea15")}
                               onChange = {this.handleResidenceArea15}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceArea16}
                               name = "ResidenceArea16"
                               id = "ResidenceArea16"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceArea15", "#ResidenceArea16")}
                               onChange = {this.handleResidenceArea16}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceArea17}
                               name = "ResidenceArea17"
                               id = "ResidenceArea17"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceArea16", "#ResidenceArea17")}
                               onChange = {this.handleResidenceArea17}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceArea18}
                               name = "ResidenceArea18"
                               id = "ResidenceArea18"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceArea17", "#ResidenceArea18")}
                               onChange = {this.handleResidenceArea18}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceArea19}
                               name = "ResidenceArea19"
                               id = "ResidenceArea19"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceArea18", "#ResidenceArea19")}
                               onChange = {this.handleResidenceArea19}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceArea20}
                               name = "ResidenceArea20"
                               id = "ResidenceArea20"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceArea19", "#ResidenceArea20")}
                               onChange = {this.handleResidenceArea20}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceArea21}
                               name = "ResidenceArea21"
                               id = "ResidenceArea21"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceArea20", "#ResidenceArea21")}
                               onChange = {this.handleResidenceArea21}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceArea22}
                               name = "ResidenceArea22"
                               id = "ResidenceArea22"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceArea21", "#ResidenceArea22")}
                               onChange = {this.handleResidenceArea22}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceArea23}
                               name = "ResidenceArea23"
                               id = "ResidenceArea23"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceArea22", "#ResidenceArea23")}
                               onChange = {this.handleResidenceArea23}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceArea24}
                               name = "ResidenceArea24"
                               id = "ResidenceArea24"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceArea23", "#ResidenceArea24")}
                               onChange = {this.handleResidenceArea24}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceArea25}
                               name = "ResidenceArea25"
                               id = "ResidenceArea25"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceArea24", "#ResidenceArea25")}
                               onChange = {this.handleResidenceArea25}/>
                             {this.state.isIndicatorEnabled === false ? 
                            <span className="tooltip" style={{marginLeft:"3%"}}>
                          <img src={indicator} style={{width:"3%",height:"3%"}} />
                            <label className="tooltiptext tooltiptextLabel" style={{width:"450px",height:"20px"}}>Please enter only alphabet</label>
                         </span>
                         : ""}
                          <br/>
                           </div>

                           <div>
                           <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceTown1}
                               name = "ResidenceTown1"
                               id = "ResidenceTown1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceTown1", "#ResidenceTown1")}
                               onChange = {this.handleResidenceTown1}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceTown2}
                               name = "ResidenceTown2"
                               id = "ResidenceTown2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceTown1", "#ResidenceTown2")}
                               onChange = {this.handleResidenceTown2}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceTown3}
                               name = "ResidenceTown3"
                               id = "ResidenceTown3"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceTown2", "#ResidenceTown3")}
                               onChange = {this.handleResidenceTown3}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceTown4}
                               name = "ResidenceTown4"
                               id = "ResidenceTown4"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceTown3", "#ResidenceTown4")}
                               onChange = {this.handleResidenceTown4}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceTown5}
                               name = "ResidenceTown5"
                               id = "ResidenceTown5"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceTown4", "#ResidenceTown5")}
                               onChange = {this.handleResidenceTown5}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceTown6}
                               name = "ResidenceTown6"
                               id = "ResidenceTown6"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceTown5", "#ResidenceTown6")}
                               onChange = {this.handleResidenceTown6}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceTown7}
                               name = "ResidenceTown7"
                               id = "ResidenceTown7"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceTown6", "#ResidenceTown7")}
                               onChange = {this.handleResidenceTown7}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceTown8}
                               name = "ResidenceTown8"
                               id = "ResidenceTown8"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceTown7", "#ResidenceTown8")}
                               onChange = {this.handleResidenceTown8}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceTown9}
                               name = "ResidenceTown9"
                               id = "ResidenceTown9"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceTown8", "#ResidenceTown9")}
                               onChange = {this.handleResidenceTown9}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceTown10}
                               name = "ResidenceTown10"
                               id = "ResidenceTown10"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceTown9", "#ResidenceTown10")}
                               onChange = {this.handleResidenceTown10}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceTown11}
                               name = "ResidenceTown11"
                               id = "ResidenceTown11"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceTown10", "#ResidenceTown11")}
                               onChange = {this.handleResidenceTown11}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceTown12}
                               name = "ResidenceTown12"
                               id = "ResidenceTown12"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceTown11", "#ResidenceTown12")}
                               onChange = {this.handleResidenceTown12}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceTown13}
                               name = "ResidenceTown13"
                               id = "ResidenceTown13"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceTown12", "#ResidenceTown13")}
                               onChange = {this.handleResidenceTown13}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceTown14}
                               name = "ResidenceTown14"
                               id = "ResidenceTown14"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceTown13", "#ResidenceTown14")}
                               onChange = {this.handleResidenceTown14}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceTown15}
                               name = "ResidenceTown15"
                               id = "ResidenceTown15"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceTown14", "#ResidenceTown15")}
                               onChange = {this.handleResidenceTown15}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceTown16}
                               name = "ResidenceTown16"
                               id = "ResidenceTown16"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceTown15", "#ResidenceTown16")}
                               onChange = {this.handleResidenceTown16}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceTown17}
                               name = "ResidenceTown17"
                               id = "ResidenceTown17"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceTown16", "#ResidenceTown17")}
                               onChange = {this.handleResidenceTown17}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceTown18}
                               name = "ResidenceTown18"
                               id = "ResidenceTown18"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceTown17", "#ResidenceTown18")}
                               onChange = {this.handleResidenceTown18}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceTown19}
                               name = "ResidenceTown19"
                               id = "ResidenceTown19"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceTown18", "#ResidenceTown19")}
                               onChange = {this.handleResidenceTown19}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceTown20}
                               name = "ResidenceTown20"
                               id = "ResidenceTown20"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceTown19", "#ResidenceTown20")}
                               onChange = {this.handleResidenceTown20}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceTown21}
                               name = "ResidenceTown21"
                               id = "ResidenceTown21"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceTown20", "#ResidenceTown21")}
                               onChange = {this.handleResidenceTown21}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceTown22}
                               name = "ResidenceTown22"
                               id = "ResidenceTown22"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceTown21", "#ResidenceTown22")}
                               onChange = {this.handleResidenceTown22}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceTown23}
                               name = "ResidenceTown23"
                               id = "ResidenceTown23"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceTown22", "#ResidenceTown23")}
                               onChange = {this.handleResidenceTown23}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceTown24}
                               name = "ResidenceTown24"
                               id = "ResidenceTown24"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceTown23", "#ResidenceTown24")}
                               onChange = {this.handleResidenceTown24}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.ResidenceTown25}
                               name = "ResidenceTown25"
                               id = "ResidenceTown25"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidenceTown24", "#ResidenceTown25")}
                               onChange = {this.handleResidenceTown25}/>
                             {this.state.isIndicatorEnabled === false ? 
                            <span className="tooltip" style={{marginLeft:"3%"}}>
                          <img src={indicator} style={{width:"3%",height:"3%"}} />
                            <label className="tooltiptext tooltiptextLabel" style={{width:"450px",height:"20px"}}>Please enter only alphabet</label>
                         </span>
                         : ""}
                          <br/>
                           </div>
                            

                         </td>
                      </tr>
                    </tbody>
                    </table>

                    <table cellPadding = "0" cellSpacing = "0"  className = "divState">
                    <tbody>
                        <tr>
                           <td >
                     
                             <label className = "StateId"> State / Union Territory </label>
                          </td>
                          <td >
                             <label className = "PincodeId"> Pincode / Zip code </label>
                          </td>
                          <td >
                             <label className = "CountryId"> Country Name </label>
                          </td>
                       </tr>
                       <tr>
                          <td >
                             
                             <input 
                                className = "StateValue"
                                name="ResidenceState"
                                id = "ResidenceState"
                                value={this.state.data.ResidenceState}
                                onChange={event => this.handleResidenceState(event)}/>
                             
                          </td>
                          <td> 
                          <input 
                               type="text" 
                               className="Pincode-control"
                               maxLength = "1"
                               value = {this.state.data.ResidencePincode1}
                               name = "ResidencePincode1"
                               id = "ResidencePincode1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidencePincode1", "#ResidencePincode1")}
                               onChange = {this.handleResidencePincode1}/>

                            <input 
                               type="text" 
                               className="Pincode-control"
                               maxLength = "1"
                               value = {this.state.data.ResidencePincode2}
                               name = "ResidencePincode2"
                               id = "ResidencePincode2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidencePincode1", "#ResidencePincode2")}
                               onChange = {this.handleResidencePincode2}/>

                            <input 
                               type="text" 
                               className="Pincode-control"
                               maxLength = "1"
                               value = {this.state.data.ResidencePincode3}
                               name = "ResidencePincode3"
                               id = "ResidencePincode3"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidencePincode2", "#ResidencePincode3")}
                               onChange = {this.handleResidencePincode3}/>

                            <input 
                               type="text" 
                               className="Pincode-control"
                               maxLength = "1"
                               value = {this.state.data.ResidencePincode4}
                               name = "ResidencePincode4"
                               id = "ResidencePincode4"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidencePincode3", "#ResidencePincode4")}
                               onChange = {this.handleResidencePincode4}/>

                            <input 
                               type="text" 
                               className="Pincode-control"
                               maxLength = "1"
                               value = {this.state.data.ResidencePincode5}
                               name = "ResidencePincode5"
                               id = "ResidencePincode5"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidencePincode4", "#ResidencePincode5")}
                               onChange = {this.handleResidencePincode5}/> 

                             <input 
                               type="text" 
                               className="Pincode-control"
                               maxLength = "1"
                               value = {this.state.data.ResidencePincode6}
                               name = "ResidencePincode6"
                               id = "ResidencePincode6"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidencePincode5", "#ResidencePincode6")}
                               onChange = {this.handleResidencePincode6}/>

                             <input 
                               type="text" 
                               className="Pincode-control"
                               maxLength = "1"
                               value = {this.state.data.ResidencePincode7}
                               name = "ResidencePincode7"
                               id = "ResidencePincode7"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#ResidencePincode6", "#ResidencePincode7")}
                               onChange = {this.handleResidencePincode7}/>



                           </td>
                           <td cellPadding = "0" cellSpacing = "0">
                             <input 
                                className = "CountryValue"
                                name="ResidenceCountry"
                                id = "ResidenceCountry"
                                value={this.state.data.ResidenceCountry}
                                onChange={event => this.handleResidenceCountry(event)}/>


                              {this.state.isIndicatorEnabled === false ? 
                              <span className="tooltip" style={{marginLeft:"20.3%"}}>
                           <img src={indicator} style={{width:"7.7%",height:"3%" ,marginLeft: "30%"}} />
                            <label className="tooltiptext tooltiptextLabel" style={{width:"450px",height:"20px"}}>Please enter as applicable</label>
                         </span>
                         : ""}
                           </td>
                          
                       </tr>
                       
                       
                    </tbody>
                    </table>
                    


                    </div>
                    <br /><br />

                    </div>
                    <br />
                    </div>
                    <br /><br />
                    <div className="Form2">
                    <br />
                    <div className="box2">
                     <div className="content2">

                    <label className = "FirstLabel Bold">Office Address </label> 
                    {this.state.isIndicatorEnabled === false ? 
                    <span className="tooltip" style={{marginLeft:"78.1%"}}>
                          <img src={indicator} style={{width:"2.2%",height:"1.9%"}} />
                            <img src={officefield} className="tooltiptext" style={{width:"600px",height:"150px"}}  />
                         </span>
                         : ""}
                         <br/>
                    <table>
                    <tbody>
                      <tr>
                         <td className ="first_td">
                            {this.state.address.map((data, index) =>
                               <label className="elements"> {data} <br/></label>   
                            )}
                         </td>

                         <td className = "secondtd">
                          <div> 
                          <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeName1}
                               name = "OfficeName1"
                               id = "OfficeName1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeName1", "#OfficeName1")}
                               onChange = {this.handleOfficeName1}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeName2}
                               name = "OfficeName2"
                               id = "OfficeName2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeName1", "#OfficeName2")}
                               onChange = {this.handleOfficeName2}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeName3}
                               name = "OfficeName3"
                               id = "OfficeName3"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeName2", "#OfficeName3")}
                               onChange = {this.handleOfficeName3}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeName4}
                               name = "OfficeName4"
                               id = "OfficeName4"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeName3", "#OfficeName4")}
                               onChange = {this.handleOfficeName4}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeName5}
                               name = "OfficeName5"
                               id = "OfficeName5"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeName4", "#OfficeName5")}
                               onChange = {this.handleOfficeName5}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeName6}
                               name = "OfficeName6"
                               id = "OfficeName6"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeName5", "#OfficeName6")}
                               onChange = {this.handleOfficeName6}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeName7}
                               name = "OfficeName7"
                               id = "OfficeName7"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeName6", "#OfficeName7")}
                               onChange = {this.handleOfficeName7}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeName8}
                               name = "OfficeName8"
                               id = "OfficeName8"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeName7", "#OfficeName8")}
                               onChange = {this.handleOfficeName8}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeName9}
                               name = "OfficeName9"
                               id = "OfficeName9"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeName8", "#OfficeName9")}
                               onChange = {this.handleOfficeName9}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeName10}
                               name = "OfficeName10"
                               id = "OfficeName10"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeName9", "#OfficeName10")}
                               onChange = {this.handleOfficeName10}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeName11}
                               name = "OfficeName11"
                               id = "OfficeName11"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeName10", "#OfficeName11")}
                               onChange = {this.handleOfficeName11}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeName12}
                               name = "OfficeName12"
                               id = "OfficeName12"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeName11", "#OfficeName12")}
                               onChange = {this.handleOfficeName12}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeName13}
                               name = "OfficeName13"
                               id = "OfficeName13"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeName12", "#OfficeName13")}
                               onChange = {this.handleOfficeName13}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeName14}
                               name = "OfficeName14"
                               id = "OfficeName14"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeName13", "#OfficeName14")}
                               onChange = {this.handleOfficeName14}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeName15}
                               name = "OfficeName15"
                               id = "OfficeName15"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeName14", "#OfficeName15")}
                               onChange = {this.handleOfficeName15}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeName16}
                               name = "OfficeName16"
                               id = "OfficeName16"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeName15", "#OfficeName16")}
                               onChange = {this.handleOfficeName16}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeName17}
                               name = "OfficeName17"
                               id = "OfficeName17"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeName16", "#OfficeName17")}
                               onChange = {this.handleOfficeName17}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeName18}
                               name = "OfficeName18"
                               id = "OfficeName18"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeName17", "#OfficeName18")}
                               onChange = {this.handleOfficeName18}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeName19}
                               name = "OfficeName19"
                               id = "OfficeName19"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeName18", "#OfficeName19")}
                               onChange = {this.handleOfficeName19}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeName20}
                               name = "OfficeName20"
                               id = "OfficeName20"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeName19", "#OfficeName20")}
                               onChange = {this.handleOfficeName20}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeName21}
                               name = "OfficeName21"
                               id = "OfficeName21"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeName20", "#OfficeName21")}
                               onChange = {this.handleOfficeName21}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeName22}
                               name = "OfficeName22"
                               id = "OfficeName22"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeName21", "#OfficeName22")}
                               onChange = {this.handleOfficeName22}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeName23}
                               name = "OfficeName23"
                               id = "OfficeName23"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeName22", "#OfficeName23")}
                               onChange = {this.handleOfficeName23}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeName24}
                               name = "OfficeName24"
                               id = "OfficeName24"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeName23", "#OfficeName24")}
                               onChange = {this.handleOfficeName24}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeName25}
                               name = "OfficeName25"
                               id = "OfficeName25"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeName24", "#OfficeName25")}
                               onChange = {this.handleOfficeName25}/>
                             {this.state.isIndicatorEnabled === false ? 
                            <span className="tooltip" style={{marginLeft:"3%"}}>
                          <img src={indicator} style={{width:"3%",height:"3%"}} />
                            <label className="tooltiptext tooltiptextLabel" style={{width:"450px",height:"20px"}}>Please enter combinations of alphabet, numbers</label>
                         </span>
                         : ""}
                         <br/>
                           </div>
                           
                           <div>
                           <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeFlat1}
                               name = "OfficeFlat1"
                               id = "OfficeFlat1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeFlat1", "#OfficeFlat1")}
                               onChange = {this.handleOfficeFlat1}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeFlat2}
                               name = "OfficeFlat2"
                               id = "OfficeFlat2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeFlat1", "#OfficeFlat2")}
                               onChange = {this.handleOfficeFlat2}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeFlat3}
                               name = "OfficeFlat3"
                               id = "OfficeFlat3"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeFlat2", "#OfficeFlat3")}
                               onChange = {this.handleOfficeFlat3}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeFlat4}
                               name = "OfficeFlat4"
                               id = "OfficeFlat4"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeFlat3", "#OfficeFlat4")}
                               onChange = {this.handleOfficeFlat4}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeFlat5}
                               name = "OfficeFlat5"
                               id = "OfficeFlat5"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeFlat4", "#OfficeFlat5")}
                               onChange = {this.handleOfficeFlat5}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeFlat6}
                               name = "OfficeFlat6"
                               id = "OfficeFlat6"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeFlat5", "#OfficeFlat6")}
                               onChange = {this.handleOfficeFlat6}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeFlat7}
                               name = "OfficeFlat7"
                               id = "OfficeFlat7"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeFlat6", "#OfficeFlat7")}
                               onChange = {this.handleOfficeFlat7}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeFlat8}
                               name = "OfficeFlat8"
                               id = "OfficeFlat8"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeFlat7", "#OfficeFlat8")}
                               onChange = {this.handleOfficeFlat8}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeFlat9}
                               name = "OfficeFlat9"
                               id = "OfficeFlat9"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeFlat8", "#OfficeFlat9")}
                               onChange = {this.handleOfficeFlat9}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeFlat10}
                               name = "OfficeFlat10"
                               id = "OfficeFlat10"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeFlat9", "#OfficeFlat10")}
                               onChange = {this.handleOfficeFlat10}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeFlat11}
                               name = "OfficeFlat11"
                               id = "OfficeFlat11"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeFlat10", "#OfficeFlat11")}
                               onChange = {this.handleOfficeFlat11}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeFlat12}
                               name = "OfficeFlat12"
                               id = "OfficeFlat12"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeFlat11", "#OfficeFlat12")}
                               onChange = {this.handleOfficeFlat12}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeFlat13}
                               name = "OfficeFlat13"
                               id = "OfficeFlat13"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeFlat12", "#OfficeFlat13")}
                               onChange = {this.handleOfficeFlat13}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeFlat14}
                               name = "OfficeFlat14"
                               id = "OfficeFlat14"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeFlat13", "#OfficeFlat14")}
                               onChange = {this.handleOfficeFlat14}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeFlat15}
                               name = "OfficeFlat15"
                               id = "OfficeFlat15"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeFlat14", "#OfficeFlat15")}
                               onChange = {this.handleOfficeFlat15}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeFlat16}
                               name = "OfficeFlat16"
                               id = "OfficeFlat16"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeFlat15", "#OfficeFlat16")}
                               onChange = {this.handleOfficeFlat16}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeFlat17}
                               name = "OfficeFlat17"
                               id = "OfficeFlat17"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeFlat16", "#OfficeFlat17")}
                               onChange = {this.handleOfficeFlat17}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeFlat18}
                               name = "OfficeFlat18"
                               id = "OfficeFlat18"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeFlat17", "#OfficeFlat18")}
                               onChange = {this.handleOfficeFlat18}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeFlat19}
                               name = "OfficeFlat19"
                               id = "OfficeFlat19"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeFlat18", "#OfficeFlat19")}
                               onChange = {this.handleOfficeFlat19}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeFlat20}
                               name = "OfficeFlat20"
                               id = "OfficeFlat20"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeFlat19", "#OfficeFlat20")}
                               onChange = {this.handleOfficeFlat20}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeFlat21}
                               name = "OfficeFlat21"
                               id = "OfficeFlat21"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeFlat20", "#OfficeFlat21")}
                               onChange = {this.handleOfficeFlat21}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeFlat22}
                               name = "OfficeFlat22"
                               id = "OfficeFlat22"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeFlat21", "#OfficeFlat22")}
                               onChange = {this.handleOfficeFlat22}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeFlat23}
                               name = "OfficeFlat23"
                               id = "OfficeFlat23"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeFlat22", "#OfficeFlat23")}
                               onChange = {this.handleOfficeFlat23}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeFlat24}
                               name = "OfficeFlat24"
                               id = "OfficeFlat24"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeFlat23", "#OfficeFlat24")}
                               onChange = {this.handleOfficeFlat24}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeFlat25}
                               name = "OfficeFlat25"
                               id = "OfficeFlat25"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeFlat24", "#OfficeFlat25")}
                               onChange = {this.handleOfficeFlat25}/>

                             {this.state.isIndicatorEnabled === false ? 
                            <span className="tooltip" style={{marginLeft:"3%"}}>
                          <img src={indicator} style={{width:"3%",height:"3%"}} />
                            <label className="tooltiptext tooltiptextLabel" style={{width:"450px",height:"20px"}}>Please enter combinations of alphabet, numbers, -, /, '</label>
                         </span>
                         : ""}
                         <br/>
                           </div>

                           <div>
                           <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficePremises1}
                               name = "OfficePremises1"
                               id = "OfficePremises1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficePremises1", "#OfficePremises1")}
                               onChange = {this.handleOfficePremises1}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficePremises2}
                               name = "OfficePremises2"
                               id = "OfficePremises2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficePremises1", "#OfficePremises2")}
                               onChange = {this.handleOfficePremises2}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficePremises3}
                               name = "OfficePremises3"
                               id = "OfficePremises3"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficePremises2", "#OfficePremises3")}
                               onChange = {this.handleOfficePremises3}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficePremises4}
                               name = "OfficePremises4"
                               id = "OfficePremises4"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficePremises3", "#OfficePremises4")}
                               onChange = {this.handleOfficePremises4}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficePremises5}
                               name = "OfficePremises5"
                               id = "OfficePremises5"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficePremises4", "#OfficePremises5")}
                               onChange = {this.handleOfficePremises5}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficePremises6}
                               name = "OfficePremises6"
                               id = "OfficePremises6"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficePremises5", "#OfficePremises6")}
                               onChange = {this.handleOfficePremises6}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficePremises7}
                               name = "OfficePremises7"
                               id = "OfficePremises7"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficePremises6", "#OfficePremises7")}
                               onChange = {this.handleOfficePremises7}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficePremises8}
                               name = "OfficePremises8"
                               id = "OfficePremises8"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficePremises7", "#OfficePremises8")}
                               onChange = {this.handleOfficePremises8}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficePremises9}
                               name = "OfficePremises9"
                               id = "OfficePremises9"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficePremises8", "#OfficePremises9")}
                               onChange = {this.handleOfficePremises9}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficePremises10}
                               name = "OfficePremises10"
                               id = "OfficePremises10"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficePremises9", "#OfficePremises10")}
                               onChange = {this.handleOfficePremises10}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficePremises11}
                               name = "OfficePremises11"
                               id = "OfficePremises11"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficePremises10", "#OfficePremises11")}
                               onChange = {this.handleOfficePremises11}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficePremises12}
                               name = "OfficePremises12"
                               id = "OfficePremises12"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficePremises11", "#OfficePremises12")}
                               onChange = {this.handleOfficePremises12}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficePremises13}
                               name = "OfficePremises13"
                               id = "OfficePremises13"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficePremises12", "#OfficePremises13")}
                               onChange = {this.handleOfficePremises13}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficePremises14}
                               name = "OfficePremises14"
                               id = "OfficePremises14"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficePremises13", "#OfficePremises14")}
                               onChange = {this.handleOfficePremises14}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficePremises15}
                               name = "OfficePremises15"
                               id = "OfficePremises15"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficePremises14", "#OfficePremises15")}
                               onChange = {this.handleOfficePremises15}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficePremises16}
                               name = "OfficePremises16"
                               id = "OfficePremises16"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficePremises15", "#OfficePremises16")}
                               onChange = {this.handleOfficePremises16}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficePremises17}
                               name = "OfficePremises17"
                               id = "OfficePremises17"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficePremises16", "#OfficePremises17")}
                               onChange = {this.handleOfficePremises17}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficePremises18}
                               name = "OfficePremises18"
                               id = "OfficePremises18"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficePremises17", "#OfficePremises18")}
                               onChange = {this.handleOfficePremises18}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficePremises19}
                               name = "OfficePremises19"
                               id = "OfficePremises19"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficePremises18", "#OfficePremises19")}
                               onChange = {this.handleOfficePremises19}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficePremises20}
                               name = "OfficePremises20"
                               id = "OfficePremises20"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficePremises19", "#OfficePremises20")}
                               onChange = {this.handleOfficePremises20}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficePremises21}
                               name = "OfficePremises21"
                               id = "OfficePremises21"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficePremises20", "#OfficePremises21")}
                               onChange = {this.handleOfficePremises21}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficePremises22}
                               name = "OfficePremises22"
                               id = "OfficePremises22"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficePremises21", "#OfficePremises22")}
                               onChange = {this.handleOfficePremises22}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficePremises23}
                               name = "OfficePremises23"
                               id = "OfficePremises23"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficePremises22", "#OfficePremises23")}
                               onChange = {this.handleOfficePremises23}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficePremises24}
                               name = "OfficePremises24"
                               id = "OfficePremises24"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficePremises23", "#OfficePremises24")}
                               onChange = {this.handleOfficePremises24}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficePremises25}
                               name = "OfficePremises25"
                               id = "OfficePremises25"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficePremises24", "#OfficePremises25")}
                               onChange = {this.handleOfficePremises25}/>
                             {this.state.isIndicatorEnabled === false ? 
                            <span className="tooltip" style={{marginLeft:"3%"}}>
                          <img src={indicator} style={{width:"3%",height:"3%"}} />
                            <label className="tooltiptext tooltiptextLabel" style={{width:"450px",height:"20px"}}>Please enter combinations of alphabet , numbers</label>
                         </span>
                         : ""}
                            <br/>
                           </div>
                            
                           <div>
                           <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeRoad1}
                               name = "OfficeRoad1"
                               id = "OfficeRoad1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeRoad1", "#OfficeRoad1")}
                               onChange = {this.handleOfficeRoad1}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeRoad2}
                               name = "OfficeRoad2"
                               id = "OfficeRoad2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeRoad1", "#OfficeRoad2")}
                               onChange = {this.handleOfficeRoad2}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeRoad3}
                               name = "OfficeRoad3"
                               id = "OfficeRoad3"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeRoad2", "#OfficeRoad3")}
                               onChange = {this.handleOfficeRoad3}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeRoad4}
                               name = "OfficeRoad4"
                               id = "OfficeRoad4"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeRoad3", "#OfficeRoad4")}
                               onChange = {this.handleOfficeRoad4}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeRoad5}
                               name = "OfficeRoad5"
                               id = "OfficeRoad5"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeRoad4", "#OfficeRoad5")}
                               onChange = {this.handleOfficeRoad5}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeRoad6}
                               name = "OfficeRoad6"
                               id = "OfficeRoad6"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeRoad5", "#OfficeRoad6")}
                               onChange = {this.handleOfficeRoad6}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeRoad7}
                               name = "OfficeRoad7"
                               id = "OfficeRoad7"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeRoad6", "#OfficeRoad7")}
                               onChange = {this.handleOfficeRoad7}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeRoad8}
                               name = "OfficeRoad8"
                               id = "OfficeRoad8"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeRoad7", "#OfficeRoad8")}
                               onChange = {this.handleOfficeRoad8}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeRoad9}
                               name = "OfficeRoad9"
                               id = "OfficeRoad9"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeRoad8", "#OfficeRoad9")}
                               onChange = {this.handleOfficeRoad9}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeRoad10}
                               name = "OfficeRoad10"
                               id = "OfficeRoad10"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeRoad9", "#OfficeRoad10")}
                               onChange = {this.handleOfficeRoad10}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeRoad11}
                               name = "OfficeRoad11"
                               id = "OfficeRoad11"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeRoad10", "#OfficeRoad11")}
                               onChange = {this.handleOfficeRoad11}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeRoad12}
                               name = "OfficeRoad12"
                               id = "OfficeRoad12"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeRoad11", "#OfficeRoad12")}
                               onChange = {this.handleOfficeRoad12}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeRoad13}
                               name = "OfficeRoad13"
                               id = "OfficeRoad13"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeRoad12", "#OfficeRoad13")}
                               onChange = {this.handleOfficeRoad13}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeRoad14}
                               name = "OfficeRoad14"
                               id = "OfficeRoad14"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeRoad13", "#OfficeRoad14")}
                               onChange = {this.handleOfficeRoad14}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeRoad15}
                               name = "OfficeRoad15"
                               id = "OfficeRoad15"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeRoad14", "#OfficeRoad15")}
                               onChange = {this.handleOfficeRoad15}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeRoad16}
                               name = "OfficeRoad16"
                               id = "OfficeRoad16"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeRoad15", "#OfficeRoad16")}
                               onChange = {this.handleOfficeRoad16}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeRoad17}
                               name = "OfficeRoad17"
                               id = "OfficeRoad17"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeRoad16", "#OfficeRoad17")}
                               onChange = {this.handleOfficeRoad17}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeRoad18}
                               name = "OfficeRoad18"
                               id = "OfficeRoad18"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeRoad17", "#OfficeRoad18")}
                               onChange = {this.handleOfficeRoad18}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeRoad19}
                               name = "OfficeRoad19"
                               id = "OfficeRoad19"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeRoad18", "#OfficeRoad19")}
                               onChange = {this.handleOfficeRoad19}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeRoad20}
                               name = "OfficeRoad20"
                               id = "OfficeRoad20"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeRoad19", "#OfficeRoad20")}
                               onChange = {this.handleOfficeRoad20}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeRoad21}
                               name = "OfficeRoad21"
                               id = "OfficeRoad21"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeRoad20", "#OfficeRoad21")}
                               onChange = {this.handleOfficeRoad21}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeRoad22}
                               name = "OfficeRoad22"
                               id = "OfficeRoad22"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeRoad21", "#OfficeRoad22")}
                               onChange = {this.handleOfficeRoad22}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeRoad23}
                               name = "OfficeRoad23"
                               id = "OfficeRoad23"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeRoad22", "#OfficeRoad23")}
                               onChange = {this.handleOfficeRoad23}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeRoad24}
                               name = "OfficeRoad24"
                               id = "OfficeRoad24"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeRoad23", "#OfficeRoad24")}
                               onChange = {this.handleOfficeRoad24}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeRoad25}
                               name = "OfficeRoad25"
                               id = "OfficeRoad25"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeRoad24", "#OfficeRoad25")}
                               onChange = {this.handleOfficeRoad25}/>

                             {this.state.isIndicatorEnabled === false ? 
                            <span className="tooltip" style={{marginLeft:"3%"}}>
                          <img src={indicator} style={{width:"3%",height:"3%"}} />
                            <label className="tooltiptext tooltiptextLabel" style={{width:"450px",height:"20px"}}>Please enter only alphabet</label>
                         </span>
                         : ""}
                         <br/>
                           </div>
                            
                           <div>
                           <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeArea1}
                               name = "OfficeArea1"
                               id = "OfficeArea1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeArea1", "#OfficeArea1")}
                               onChange = {this.handleOfficeArea1}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeArea2}
                               name = "OfficeArea2"
                               id = "OfficeArea2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeArea1", "#OfficeArea2")}
                               onChange = {this.handleOfficeArea2}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeArea3}
                               name = "OfficeArea3"
                               id = "OfficeArea3"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeArea2", "#OfficeArea3")}
                               onChange = {this.handleOfficeArea3}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeArea4}
                               name = "OfficeArea4"
                               id = "OfficeArea4"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeArea3", "#OfficeArea4")}
                               onChange = {this.handleOfficeArea4}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeArea5}
                               name = "OfficeArea5"
                               id = "OfficeArea5"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeArea4", "#OfficeArea5")}
                               onChange = {this.handleOfficeArea5}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeArea6}
                               name = "OfficeArea6"
                               id = "OfficeArea6"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeArea5", "#OfficeArea6")}
                               onChange = {this.handleOfficeArea6}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeArea7}
                               name = "OfficeArea7"
                               id = "OfficeArea7"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeArea6", "#OfficeArea7")}
                               onChange = {this.handleOfficeArea7}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeArea8}
                               name = "OfficeArea8"
                               id = "OfficeArea8"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeArea7", "#OfficeArea8")}
                               onChange = {this.handleOfficeArea8}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeArea9}
                               name = "OfficeArea9"
                               id = "OfficeArea9"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeArea8", "#OfficeArea9")}
                               onChange = {this.handleOfficeArea9}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeArea10}
                               name = "OfficeArea10"
                               id = "OfficeArea10"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeArea9", "#OfficeArea10")}
                               onChange = {this.handleOfficeArea10}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeArea11}
                               name = "OfficeArea11"
                               id = "OfficeArea11"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeArea10", "#OfficeArea11")}
                               onChange = {this.handleOfficeArea11}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeArea12}
                               name = "OfficeArea12"
                               id = "OfficeArea12"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeArea11", "#OfficeArea12")}
                               onChange = {this.handleOfficeArea12}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeArea13}
                               name = "OfficeArea13"
                               id = "OfficeArea13"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeArea12", "#OfficeArea13")}
                               onChange = {this.handleOfficeArea13}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeArea14}
                               name = "OfficeArea14"
                               id = "OfficeArea14"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeArea13", "#OfficeArea14")}
                               onChange = {this.handleOfficeArea14}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeArea15}
                               name = "OfficeArea15"
                               id = "OfficeArea15"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeArea14", "#OfficeArea15")}
                               onChange = {this.handleOfficeArea15}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeArea16}
                               name = "OfficeArea16"
                               id = "OfficeArea16"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeArea15", "#OfficeArea16")}
                               onChange = {this.handleOfficeArea16}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeArea17}
                               name = "OfficeArea17"
                               id = "OfficeArea17"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeArea16", "#OfficeArea17")}
                               onChange = {this.handleOfficeArea17}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeArea18}
                               name = "OfficeArea18"
                               id = "OfficeArea18"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeArea17", "#OfficeArea18")}
                               onChange = {this.handleOfficeArea18}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeArea19}
                               name = "OfficeArea19"
                               id = "OfficeArea19"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeArea18", "#OfficeArea19")}
                               onChange = {this.handleOfficeArea19}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeArea20}
                               name = "OfficeArea20"
                               id = "OfficeArea20"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeArea19", "#OfficeArea20")}
                               onChange = {this.handleOfficeArea20}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeArea21}
                               name = "OfficeArea21"
                               id = "OfficeArea21"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeArea20", "#OfficeArea21")}
                               onChange = {this.handleOfficeArea21}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeArea22}
                               name = "OfficeArea22"
                               id = "OfficeArea22"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeArea21", "#OfficeArea22")}
                               onChange = {this.handleOfficeArea22}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeArea23}
                               name = "OfficeArea23"
                               id = "OfficeArea23"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeArea22", "#OfficeArea23")}
                               onChange = {this.handleOfficeArea23}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeArea24}
                               name = "OfficeArea24"
                               id = "OfficeArea24"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeArea23", "#OfficeArea24")}
                               onChange = {this.handleOfficeArea24}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeArea25}
                               name = "OfficeArea25"
                               id = "OfficeArea25"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeArea24", "#OfficeArea25")}
                               onChange = {this.handleOfficeArea25}/>
                             {this.state.isIndicatorEnabled === false ? 
                            <span className="tooltip" style={{marginLeft:"3%"}}>
                          <img src={indicator} style={{width:"3%",height:"3%"}} />
                            <label className="tooltiptext tooltiptextLabel" style={{width:"450px",height:"20px"}} >Please enter only alphabet</label>
                         </span>
                         : ""}
                         <br/>
                           </div>


                           <div>    
                           <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeTown1}
                               name = "OfficeTown1"
                               id = "OfficeTown1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeTown1", "#OfficeTown1")}
                               onChange = {this.handleOfficeTown1}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeTown2}
                               name = "OfficeTown2"
                               id = "OfficeTown2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeTown1", "#OfficeTown2")}
                               onChange = {this.handleOfficeTown2}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeTown3}
                               name = "OfficeTown3"
                               id = "OfficeTown3"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeTown2", "#OfficeTown3")}
                               onChange = {this.handleOfficeTown3}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeTown4}
                               name = "OfficeTown4"
                               id = "OfficeTown4"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeTown3", "#OfficeTown4")}
                               onChange = {this.handleOfficeTown4}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeTown5}
                               name = "OfficeTown5"
                               id = "OfficeTown5"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeTown4", "#OfficeTown5")}
                               onChange = {this.handleOfficeTown5}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeTown6}
                               name = "OfficeTown6"
                               id = "OfficeTown6"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeTown5", "#OfficeTown6")}
                               onChange = {this.handleOfficeTown6}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeTown7}
                               name = "OfficeTown7"
                               id = "OfficeTown7"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeTown6", "#OfficeTown7")}
                               onChange = {this.handleOfficeTown7}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeTown8}
                               name = "OfficeTown8"
                               id = "OfficeTown8"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeTown7", "#OfficeTown8")}
                               onChange = {this.handleOfficeTown8}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeTown9}
                               name = "OfficeTown9"
                               id = "OfficeTown9"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeTown8", "#OfficeTown9")}
                               onChange = {this.handleOfficeTown9}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeTown10}
                               name = "OfficeTown10"
                               id = "OfficeTown10"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeTown9", "#OfficeTown10")}
                               onChange = {this.handleOfficeTown10}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeTown11}
                               name = "OfficeTown11"
                               id = "OfficeTown11"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeTown10", "#OfficeTown11")}
                               onChange = {this.handleOfficeTown11}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeTown12}
                               name = "OfficeTown12"
                               id = "OfficeTown12"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeTown11", "#OfficeTown12")}
                               onChange = {this.handleOfficeTown12}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeTown13}
                               name = "OfficeTown13"
                               id = "OfficeTown13"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeTown12", "#OfficeTown13")}
                               onChange = {this.handleOfficeTown13}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeTown14}
                               name = "OfficeTown14"
                               id = "OfficeTown14"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeTown13", "#OfficeTown14")}
                               onChange = {this.handleOfficeTown14}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeTown15}
                               name = "OfficeTown15"
                               id = "OfficeTown15"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeTown14", "#OfficeTown15")}
                               onChange = {this.handleOfficeTown15}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeTown16}
                               name = "OfficeTown16"
                               id = "OfficeTown16"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeTown15", "#OfficeTown16")}
                               onChange = {this.handleOfficeTown16}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeTown17}
                               name = "OfficeTown17"
                               id = "OfficeTown17"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeTown16", "#OfficeTown17")}
                               onChange = {this.handleOfficeTown17}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeTown18}
                               name = "OfficeTown18"
                               id = "OfficeTown18"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeTown17", "#OfficeTown18")}
                               onChange = {this.handleOfficeTown18}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeTown19}
                               name = "OfficeTown19"
                               id = "OfficeTown19"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeTown18", "#OfficeTown19")}
                               onChange = {this.handleOfficeTown19}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeTown20}
                               name = "OfficeTown20"
                               id = "OfficeTown20"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeTown19", "#OfficeTown20")}
                               onChange = {this.handleOfficeTown20}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeTown21}
                               name = "OfficeTown21"
                               id = "OfficeTown21"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeTown20", "#OfficeTown21")}
                               onChange = {this.handleOfficeTown21}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeTown22}
                               name = "OfficeTown22"
                               id = "OfficeTown22"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeTown21", "#OfficeTown22")}
                               onChange = {this.handleOfficeTown22}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeTown23}
                               name = "OfficeTown23"
                               id = "OfficeTown23"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeTown22", "#OfficeTown23")}
                               onChange = {this.handleOfficeTown23}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeTown24}
                               name = "OfficeTown24"
                               id = "OfficeTown24"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeTown23", "#OfficeTown24")}
                               onChange = {this.handleOfficeTown24}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.OfficeTown25}
                               name = "OfficeTown25"
                               id = "OfficeTown25"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficeTown24", "#OfficeTown25")}
                               onChange = {this.handleOfficeTown25}/>

                             {this.state.isIndicatorEnabled === false ? 
                            <span className="tooltip" style={{marginLeft:"3%"}}>
                          <img src={indicator} style={{width:"3%",height:"3%"}} />
                            <label className="tooltiptext tooltiptextLabel" style={{width:"450px",height:"20px"}} >Please enter only alphabet</label>
                         </span>
                         : ""}
                          <br/>  
                            </div>
                             

                         </td>
                      </tr>
                    </tbody>
                    </table>
                     
                    <table cellPadding = "0" cellSpacing = "0"  className = "divState">
                    <tbody>
                        <tr>
                           <td >
                             <label className = "StateId"> State / Union Territory </label>
                          </td>
                          <td >
                             <label className = "PincodeId"> Pincode / Zip code </label>
                          </td>
                          <td >
                             <label className = "CountryId"> Country Name </label>
                          </td>
                       </tr>
                       <tr>
                          <td >
                             <input 
                                 className = "StateValue"
                                 name="OfficeState"
                                 id = "OfficeState"
                                 value={this.state.data.OfficeState}
                                 onChange={event => this.handleOfficeState(event)}/>
                                
                          </td>
                          <td> 
                          <input 
                               type="text" 
                               className="Pincode-control"
                               maxLength = "1"
                               value = {this.state.data.OfficePincode1}
                               name = "OfficePincode1"
                               id = "OfficePincode1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficePincode1", "#OfficePincode1")}
                               onChange = {this.handleOfficePincode1}/>

                            <input 
                               type="text" 
                               className="Pincode-control"
                               maxLength = "1"
                               value = {this.state.data.OfficePincode2}
                               name = "OfficePincode2"
                               id = "OfficePincode2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficePincode1", "#OfficePincode2")}
                               onChange = {this.handleOfficePincode2}/>

                            <input 
                               type="text" 
                               className="Pincode-control"
                               maxLength = "1"
                               value = {this.state.data.OfficePincode3}
                               name = "OfficePincode3"
                               id = "OfficePincode3"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficePincode2", "#OfficePincode3")}
                               onChange = {this.handleOfficePincode3}/>

                            <input 
                               type="text" 
                               className="Pincode-control"
                               maxLength = "1"
                               value = {this.state.data.OfficePincode4}
                               name = "OfficePincode4"
                               id = "OfficePincode4"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficePincode3", "#OfficePincode4")}
                               onChange = {this.handleOfficePincode4}/>

                            <input 
                               type="text" 
                               className="Pincode-control"
                               maxLength = "1"
                               value = {this.state.data.OfficePincode5}
                               name = "OfficePincode5"
                               id = "OfficePincode5"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficePincode4", "#OfficePincode5")}
                               onChange = {this.handleOfficePincode5}/> 

                             <input 
                               type="text" 
                               className="Pincode-control"
                               maxLength = "1"
                               value = {this.state.data.OfficePincode6}
                               name = "OfficePincode6"
                               id = "OfficePincode6"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficePincode5", "#OfficePincode6")}
                               onChange = {this.handleOfficePincode6}/>

                             <input 
                               type="text" 
                               className="Pincode-control"
                               maxLength = "1"
                               value = {this.state.data.OfficePincode7}
                               name = "OfficePincode7"
                               id = "OfficePincode7"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#OfficePincode6", "#OfficePincode7")}
                               onChange = {this.handleOfficePincode7}/>


                           </td>
                           <td cellPadding = "0" cellSpacing = "0">
                             <input 
                                className = "CountryValue"
                                name="OfficeCountry"
                                id = "OfficeCountry"
                                value={this.state.data.OfficeCountry}
                                onChange={event => this.handleOfficeCountry(event)}/>
                        {this.state.isIndicatorEnabled === false ? 
                        <span className="tooltip" style={{marginLeft:"21%"}}>
                          <img src={indicator} style={{    width: "7.5%",height: "3.2% ", marginLeft: "30%"}} />
                            <label className="tooltiptext tooltiptextLabel" style={{width:"450px",height:"20px"}} >Please enter as applicable</label>
                         </span>
                         : ""}
                           </td>
                           
                       </tr>
                        
                    </tbody>
                    </table>
                    

                    

                    {/* Eight Component */}

                    <div className = "ColouredLabel"> 
                        <label >&nbsp;&nbsp; 8 &nbsp; Address for Communication</label>

                        
                        <input 
                           type="checkbox" 
                           className="Check Left_space"
                           value = "Residence"
                           id = "16"
                           name = "Communication[6][]"
                           onClick={(e)=>this.handleCommunicationCheck(e,"Communication")}/>
                        <label className = "Label_with_no_space"> Residence</label> &nbsp; &nbsp;

                        <input 
                           type="checkbox" 
                           className="Check"
                           value = "Office"
                           id = "17"
                           name = "Communication[6][]"
                           onClick={(e)=>this.handleCommunicationCheck(e,"Communication")}/>
                        <label className = "Label_with_no_space"> Office</label>

                        <label className="Label_with_no_space Move_End1"> (please tick as applicable)</label>
                        {this.state.isIndicatorEnabled === false ? 
                        <span className="tooltip" style={{marginLeft:"9.7%"}}>
                          <img src={indicator} style={{width:"2.2%",height:"2.2%", marginLeft: "3.2%"}} />
                            <img src={communicationcheckfield} className="tooltiptext" style={{width:"600px",height:"50px"}}  />
                         </span> 
                         : ""}
                    </div>
                    <span className="ErrorMsg">{this.state.errors.Communication}</span>
                     
                     {/* Ninth Component */}

                     <div className = "ColouredLabel">
                       <label > &nbsp;&nbsp; 9 &nbsp; Telephone Number & Email ID details</label>
                     </div>

                     <div className= "divnine">
                         <table>
                         <tbody>
                            <tr>
                                <td  className ="Country_td">
                                   <label  className ="Country" >Country code </label>
                                </td>
                                <td className="Std_td" >
                                   <label className = "Std">Area/ STD Code</label>
                                </td>
                                <td className = "Telephone_td">
                                   <label className = "Telephone">Telephone / Mobile number</label>
                                </td>
                            </tr>
                            <tr>
                                <td >
                
                                <input 
                               type="text" 
                               className="CountryCode-control"
                               maxLength = "1"
                               value = {this.state.data.CountryCode1}
                               name = "CountryCode1"
                               id = "CountryCode1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#CountryCode1", "#CountryCode1")}
                               onChange = {this.handleCountryCode1}/>

                            <input 
                               type="text" 
                               className="CountryCode-control"
                               maxLength = "1"
                               value = {this.state.data.CountryCode2}
                               name = "CountryCode2"
                               id = "CountryCode2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#CountryCode1", "#CountryCode2")}
                               onChange = {this.handleCountryCode2}/>

                            <input 
                               type="text" 
                               className="CountryCode-control"
                               maxLength = "1"
                               value = {this.state.data.CountryCode3}
                               name = "CountryCode3"
                               id = "CountryCode3"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#CountryCode2", "#CountryCode3")}
                               onChange = {this.handleCountryCode3}/>
 

                                  
                                </td>  
                                <td >
                                <input 
                               type="text" 
                               className="StdCode-control"
                               maxLength = "1"
                               value = {this.state.data.StdCode1}
                               name = "StdCode1"
                               id = "StdCode1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#StdCode1", "#StdCode1")}
                               onChange = {this.handleStdCode1}/>

                            <input 
                               type="text" 
                               className="StdCode-control"
                               maxLength = "1"
                               value = {this.state.data.StdCode2}
                               name = "StdCode2"
                               id = "StdCode2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#StdCode1", "#StdCode2")}
                               onChange = {this.handleStdCode2}/>

                            <input 
                               type="text" 
                               className="StdCode-control"
                               maxLength = "1"
                               value = {this.state.data.StdCode3}
                               name = "StdCode3"
                               id = "StdCode3"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#StdCode2", "#StdCode3")}
                               onChange = {this.handleStdCode3}/>

                            <input 
                               type="text" 
                               className="StdCode-control"
                               maxLength = "1"
                               value = {this.state.data.StdCode4}
                               name = "StdCode4"
                               id = "StdCode4"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#StdCode3", "#StdCode4")}
                               onChange = {this.handleStdCode4}/>

                            <input 
                               type="text" 
                               className="StdCode-control"
                               maxLength = "1"
                               value = {this.state.data.StdCode5}
                               name = "StdCode5"
                               id = "StdCode5"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#StdCode4", "#StdCode5")}
                               onChange = {this.handleStdCode5}/> 

                             <input 
                               type="text" 
                               className="StdCode-control"
                               maxLength = "1"
                               value = {this.state.data.StdCode6}
                               name = "StdCode6"
                               id = "StdCode6"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#StdCode5", "#StdCode6")}
                               onChange = {this.handleStdCode6}/>

                             <input 
                               type="text" 
                               className="StdCode-control"
                               maxLength = "1"
                               value = {this.state.data.StdCode7}
                               name = "StdCode7"
                               id = "StdCode7"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#StdCode6", "#StdCode7")}
                               onChange = {this.handleStdCode7}/>

                                </td>
                                <td className = "Telephone_td">
                                <input 
                               type="text" 
                               className="PhoneNumber-control"
                               maxLength = "1"
                               value = {this.state.data.PhoneNumber1}
                               name = "PhoneNumber1"
                               id = "PhoneNumber1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#PhoneNumber1", "#PhoneNumber1")}
                               onChange = {this.handlePhoneNumber1}/>

                            <input 
                               type="text" 
                               className="PhoneNumber-control"
                               maxLength = "1"
                               value = {this.state.data.PhoneNumber2}
                               name = "PhoneNumber2"
                               id = "PhoneNumber2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#PhoneNumber1", "#PhoneNumber2")}
                               onChange = {this.handlePhoneNumber2}/>

                            <input 
                               type="text" 
                               className="PhoneNumber-control"
                               maxLength = "1"
                               value = {this.state.data.PhoneNumber3}
                               name = "PhoneNumber3"
                               id = "PhoneNumber3"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#PhoneNumber2", "#PhoneNumber3")}
                               onChange = {this.handlePhoneNumber3}/>

                            <input 
                               type="text" 
                               className="PhoneNumber-control"
                               maxLength = "1"
                               value = {this.state.data.PhoneNumber4}
                               name = "PhoneNumber4"
                               id = "PhoneNumber4"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#PhoneNumber3", "#PhoneNumber4")}
                               onChange = {this.handlePhoneNumber4}/>

                            <input 
                               type="text" 
                               className="PhoneNumber-control"
                               maxLength = "1"
                               value = {this.state.data.PhoneNumber5}
                               name = "PhoneNumber5"
                               id = "PhoneNumber5"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#PhoneNumber4", "#PhoneNumber5")}
                               onChange = {this.handlePhoneNumber5}/> 

                             <input 
                               type="text" 
                               className="PhoneNumber-control"
                               maxLength = "1"
                               value = {this.state.data.PhoneNumber6}
                               name = "PhoneNumber6"
                               id = "PhoneNumber6"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#PhoneNumber5", "#PhoneNumber6")}
                               onChange = {this.handlePhoneNumber6}/>

                             <input 
                               type="text" 
                               className="PhoneNumber-control"
                               maxLength = "1"
                               value = {this.state.data.PhoneNumber7}
                               name = "PhoneNumber7"
                               id = "PhoneNumber7"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#PhoneNumber6", "#PhoneNumber7")}
                               onChange = {this.handlePhoneNumber7}/>

                             <input 
                               type="text" 
                               className="PhoneNumber-control"
                               maxLength = "1"
                               value = {this.state.data.PhoneNumber8}
                               name = "PhoneNumber8"
                               id = "PhoneNumber8"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#PhoneNumber7", "#PhoneNumber8")}
                               onChange = {this.handlePhoneNumber8}/> 

                             <input 
                               type="text" 
                               className="PhoneNumber-control"
                               maxLength = "1"
                               value = {this.state.data.PhoneNumber9}
                               name = "PhoneNumber9"
                               id = "PhoneNumber9"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#PhoneNumber8", "#PhoneNumber9")}
                               onChange = {this.handlePhoneNumber9}/>

                             <input 
                               type="text" 
                               className="PhoneNumber-control"
                               maxLength = "1"
                               value = {this.state.data.PhoneNumber10}
                               name = "PhoneNumber10"
                               id = "PhoneNumber10"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#PhoneNumber9", "#PhoneNumber10")}
                               onChange = {this.handlePhoneNumber10}/>

                            <input 
                               type="text" 
                               className="PhoneNumber-control"
                               maxLength = "1"
                               value = {this.state.data.PhoneNumber11}
                               name = "PhoneNumber11"
                               id = "PhoneNumber11"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#PhoneNumber10", "#PhoneNumber11")}
                               onChange = {this.handlePhoneNumber11}/>

                             <input 
                               type="text" 
                               className="PhoneNumber-control"
                               maxLength = "1"
                               value = {this.state.data.PhoneNumber12}
                               name = "PhoneNumber12"
                               id = "PhoneNumber12"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#PhoneNumber11", "#PhoneNumber12")}
                               onChange = {this.handlePhoneNumber12}/> 

                             <input 
                               type="text" 
                               className="PhoneNumber-control"
                               maxLength = "1"
                               value = {this.state.data.PhoneNumber13}
                               name = "PhoneNumber13"
                               id = "PhoneNumber13"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#PhoneNumber12", "#PhoneNumber13")}
                               onChange = {this.handlePhoneNumber13}/>
                            {this.state.isIndicatorEnabled === false ? 
                            <span className="tooltip" style={{marginLeft:"22.2%"}}>
                            <img src={indicator} style={{width:"3.75%",height:"3.45%" , marginLeft: "-2%"}} />
                                <img src={phonenumberfield} className="tooltiptext" style={{width:"600px",height:"250px"}}  />
                            </span>       
                            : ""}  

                                </td>
                              
                            </tr>
                             
                         </tbody>
                         </table>
            
                     </div>


                     <label className= "FirstLabel"> Email ID</label>
                     <input 
                        type= "text" 
                        className = "EmailInput"
                        id="Email"
                        name="Email"
                        value={this.state.data.Email}
                        onChange={event => this.handleEmail(event)}/> 
                          {this.state.isIndicatorEnabled === false ? 
                        <span className="tooltip" style={{marginLeft:"20.1%"}}>
                            <img src={indicator} style={{width:"2.3%",height:"2.3%", marginLeft: "4%"}} />
                                <label className="tooltiptext tooltiptextLabel" style={{width:"600px",height:"40px"}}> Please enter combinations of alphabet, numbers, and special characters. <br/>Must include @, .</label>
                            </span>   
                        : ""} 
                            <br/>
 
                    {/* Tenth Component */}

                    <div className = "ColouredLabel">
                       <label >&nbsp;&nbsp; 10 &nbsp; Status of applicant</label>
                       {this.state.isIndicatorEnabled === false ? 
                       <span className="tooltip" style={{marginLeft:"75.2%"}}>
                            <img src={indicator} style={{width:"2.3%",height:"2.3%", marginLeft: "-0.5%"}} />
                                <img src={statusfield} className="tooltiptext" style={{width:"600px",height:"70px"}}  />
                            </span>    
                        :""}
                             <br/>
                    </div>
                    

                    <label className="FirstLabel"> &nbsp;&nbsp;Please select status,</label>  
                    <label className="Label_with_no_space"> as applicable</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                    
                    <input 
                       type="checkbox" 
                       className="Check GovernmentCheck"
                       style = {{marginLeft : "42%"}}
                       value = "Government"
                       id = "22"
                       name = "Status[7][]"
                       onClick={(e)=>this.handleStatusCheck(e,"Status")}/>
                    <label className = "Label_with_no_space">Government</label> <br/>

                    <input 
                       type="checkbox" 
                       className="Check IndividualCheck"
                       value = "Individual"
                       id = "23"
                       name = "Status[7][]"
                       onClick={(e)=>this.handleStatusCheck(e,"Status")}/>
                    <label className = "Label_with_no_space"> Individual</label> &nbsp; 

                    <input 
                       type="checkbox" 
                       className="Check IndividualCheck"
                       value = "Hindu undivided family"
                       id = "24"
                       name = "Status[7][]"
                       onClick={(e)=>this.handleStatusCheck(e,"Status")}/>
                    <label className = "Label_with_no_space"> Hindu undivided family</label> 

                    <input 
                       type="checkbox" 
                       className="Check "
                       value = "Company"
                       id = "25"
                       name = "Status[7][]"
                       onClick={(e)=>this.handleStatusCheck(e,"Status")}/>
                    <label className = "Label_with_no_space"> Company</label> &nbsp;&nbsp;  

                    <input 
                       type="checkbox" 
                       className="Check IndividualCheck"
                       value = "Patnership Firm"
                       id = "26"
                       name = "Status[7][]"
                       onClick={(e)=>this.handleStatusCheck(e,"Status")}/>
                    <label className = "Label_with_no_space"> Patnership Firm</label> 
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 

                     <input 
                       type="checkbox" 
                       className="Check IndividualCheck"
                       value = " Associations of Persons"
                       id = "27"
                       name = "Status[7][]"
                       onClick={(e)=>this.handleStatusCheck(e,"Status")}/>  
                    <label className = "Label_with_no_space">  Associations of Persons</label>  <br/>

                    <input 
                       type="checkbox" 
                       className="Check IndividualCheck"
                       value = "Trusts"
                       id = "28"
                       name = "Status[7][]"
                       onClick={(e)=>this.handleStatusCheck(e,"Status")}/> 
                    <label className = "Label_with_no_space"> Trusts</label>  &nbsp;&nbsp;  &nbsp;&nbsp; 

                     <input 
                       type="checkbox" 
                       className="Check IndividualCheck"
                       value = "Body of Individuals"
                       id = "29"
                       name = "Status[7][]"
                       onClick={(e)=>this.handleStatusCheck(e,"Status")}/>    
                    <label className = "Label_with_no_space"> Body of Individuals</label>&nbsp;&nbsp;&nbsp;&nbsp; 

                    <input 
                       type="checkbox" 
                       className="Check "
                       value = "Local Authority"
                       id = "30"
                       name = "Status[7][]"
                       onClick={(e)=>this.handleStatusCheck(e,"Status")}/> 
                    <label className = "Label_with_no_space"> Local Authority</label> 

                    <input 
                       type="checkbox" 
                       className="Check "
                       value = "Artificial Juridical Persons"
                       id = "31"
                       name = "Status[7][]"
                       onClick={(e)=>this.handleStatusCheck(e,"Status")}/> 
                    <label className = "Label_with_no_space">Artificial Juridical Persons</label> 

                    <input 
                       type="checkbox" 
                       className="Check "
                       value = "Limited Liability Partnership"
                       id = "32"
                       name = "Status[7][]"
                       onClick={(e)=>this.handleStatusCheck(e,"Status")}/> 
                    <label className = "Label_with_no_space"> Limited Liability Partnership</label> <br/>
                    <span className="ErrorMsg">{this.state.errors.Status}</span>


                    {/* Eleventh Component */}

                    <div className = "ColouredLabel">
                        <label>&nbsp;&nbsp; 11 &nbsp; Registration Number (for company, firms, LLPs etc.)</label>
                        {this.state.isIndicatorEnabled === false ? 
                        <span className="tooltip" style={{marginLeft:"52%"}}>
                            <img src={indicator} style={{width:"2.3%",height:"2.3%", marginLeft : "2%"}} />
                                <img src={registrationNumber} className="tooltiptext" style={{width:"600px",height:"80px"}}  />
                            </span>  
                        : ""}
                    </div>
                    
                    <div className= "IndividualCheck">   
                    <input 
                               type="text" 
                               className="RegistrationNumber-control"
                               maxLength = "1"
                               value = {this.state.data.RegistrationNumber1}
                               name = "RegistrationNumber1"
                               id = "RegistrationNumber1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RegistrationNumber1", "#RegistrationNumber1")}
                               onChange = {this.handleRegistrationNumber1}/>

                            <input 
                               type="text" 
                               className="RegistrationNumber-control"
                               maxLength = "1"
                               value = {this.state.data.RegistrationNumber2}
                               name = "RegistrationNumber2"
                               id = "RegistrationNumber2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RegistrationNumber1", "#RegistrationNumber2")}
                               onChange = {this.handleRegistrationNumber2}/>

                            <input 
                               type="text" 
                               className="RegistrationNumber-control"
                               maxLength = "1"
                               value = {this.state.data.RegistrationNumber3}
                               name = "RegistrationNumber3"
                               id = "RegistrationNumber3"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RegistrationNumber2", "#RegistrationNumber3")}
                               onChange = {this.handleRegistrationNumber3}/>

                            <input 
                               type="text" 
                               className="RegistrationNumber-control"
                               maxLength = "1"
                               value = {this.state.data.RegistrationNumber4}
                               name = "RegistrationNumber4"
                               id = "RegistrationNumber4"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RegistrationNumber3", "#RegistrationNumber4")}
                               onChange = {this.handleRegistrationNumber4}/>

                            <input 
                               type="text" 
                               className="RegistrationNumber-control"
                               maxLength = "1"
                               value = {this.state.data.RegistrationNumber5}
                               name = "RegistrationNumber5"
                               id = "RegistrationNumber5"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RegistrationNumber4", "#RegistrationNumber5")}
                               onChange = {this.handleRegistrationNumber5}/> 

                             <input 
                               type="text" 
                               className="RegistrationNumber-control"
                               maxLength = "1"
                               value = {this.state.data.RegistrationNumber6}
                               name = "RegistrationNumber6"
                               id = "RegistrationNumber6"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RegistrationNumber5", "#RegistrationNumber6")}
                               onChange = {this.handleRegistrationNumber6}/>

                             <input 
                               type="text" 
                               className="RegistrationNumber-control"
                               maxLength = "1"
                               value = {this.state.data.RegistrationNumber7}
                               name = "RegistrationNumber7"
                               id = "RegistrationNumber7"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RegistrationNumber6", "#RegistrationNumber7")}
                               onChange = {this.handleRegistrationNumber7}/>

                             <input 
                               type="text" 
                               className="RegistrationNumber-control"
                               maxLength = "1"
                               value = {this.state.data.RegistrationNumber8}
                               name = "RegistrationNumber8"
                               id = "RegistrationNumber8"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RegistrationNumber7", "#RegistrationNumber8")}
                               onChange = {this.handleRegistrationNumber8}/> 

                             <input 
                               type="text" 
                               className="RegistrationNumber-control"
                               maxLength = "1"
                               value = {this.state.data.RegistrationNumber9}
                               name = "RegistrationNumber9"
                               id = "RegistrationNumber9"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RegistrationNumber8", "#RegistrationNumber9")}
                               onChange = {this.handleRegistrationNumber9}/>

                             <input 
                               type="text" 
                               className="RegistrationNumber-control"
                               maxLength = "1"
                               value = {this.state.data.RegistrationNumber10}
                               name = "RegistrationNumber10"
                               id = "RegistrationNumber10"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RegistrationNumber9", "#RegistrationNumber10")}
                               onChange = {this.handleRegistrationNumber10}/>

                            <input 
                               type="text" 
                               className="RegistrationNumber-control"
                               maxLength = "1"
                               value = {this.state.data.RegistrationNumber11}
                               name = "RegistrationNumber11"
                               id = "RegistrationNumber11"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RegistrationNumber10", "#RegistrationNumber11")}
                               onChange = {this.handleRegistrationNumber11}/>

                             <input 
                               type="text" 
                               className="RegistrationNumber-control"
                               maxLength = "1"
                               value = {this.state.data.RegistrationNumber12}
                               name = "RegistrationNumber12"
                               id = "RegistrationNumber12"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RegistrationNumber11", "#RegistrationNumber12")}
                               onChange = {this.handleRegistrationNumber12}/> 

                             <input 
                               type="text" 
                               className="RegistrationNumber-control"
                               maxLength = "1"
                               value = {this.state.data.RegistrationNumber13}
                               name = "RegistrationNumber13"
                               id = "RegistrationNumber13"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RegistrationNumber12", "#RegistrationNumber13")}
                               onChange = {this.handleRegistrationNumber13}/>

                             <input 
                               type="text" 
                               className="RegistrationNumber-control"
                               maxLength = "1"
                               value = {this.state.data.RegistrationNumber14}
                               name = "RegistrationNumber14"
                               id = "RegistrationNumber14"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RegistrationNumber13", "#RegistrationNumber14")}
                               onChange = {this.handleRegistrationNumber14}/>

                             <input 
                               type="text" 
                               className="RegistrationNumber-control"
                               maxLength = "1"
                               value = {this.state.data.RegistrationNumber15}
                               name = "RegistrationNumber15"
                               id = "RegistrationNumber15"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RegistrationNumber14", "#RegistrationNumber15")}
                               onChange = {this.handleRegistrationNumber15}/>

                            <input 
                               type="text" 
                               className="RegistrationNumber-control"
                               maxLength = "1"
                               value = {this.state.data.RegistrationNumber16}
                               name = "RegistrationNumber16"
                               id = "RegistrationNumber16"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RegistrationNumber15", "#RegistrationNumber16")}
                               onChange = {this.handleRegistrationNumber16}/>

                             <input 
                               type="text" 
                               className="RegistrationNumber-control"
                               maxLength = "1"
                               value = {this.state.data.RegistrationNumber17}
                               name = "RegistrationNumber17"
                               id = "RegistrationNumber17"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RegistrationNumber16", "#RegistrationNumber17")}
                               onChange = {this.handleRegistrationNumber17}/>

                             <input 
                               type="text" 
                               className="RegistrationNumber-control"
                               maxLength = "1"
                               value = {this.state.data.RegistrationNumber18}
                               name = "RegistrationNumber18"
                               id = "RegistrationNumber18"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RegistrationNumber17", "#RegistrationNumber18")}
                               onChange = {this.handleRegistrationNumber18}/>

                             <input 
                               type="text" 
                               className="RegistrationNumber-control"
                               maxLength = "1"
                               value = {this.state.data.RegistrationNumber19}
                               name = "RegistrationNumber19"
                               id = "RegistrationNumber19"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RegistrationNumber18", "#RegistrationNumber19")}
                               onChange = {this.handleRegistrationNumber19}/>

                             <input 
                               type="text" 
                               className="RegistrationNumber-control"
                               maxLength = "1"
                               value = {this.state.data.RegistrationNumber20}
                               name = "RegistrationNumber20"
                               id = "RegistrationNumber20"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RegistrationNumber19", "#RegistrationNumber20")}
                               onChange = {this.handleRegistrationNumber20}/>

                            <input 
                               type="text" 
                               className="RegistrationNumber-control"
                               maxLength = "1"
                               value = {this.state.data.RegistrationNumber21}
                               name = "RegistrationNumber21"
                               id = "RegistrationNumber21"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RegistrationNumber20", "#RegistrationNumber21")}
                               onChange = {this.handleRegistrationNumber21}/>

                            <input 
                               type="text" 
                               className="RegistrationNumber-control"
                               maxLength = "1"
                               value = {this.state.data.RegistrationNumber22}
                               name = "RegistrationNumber22"
                               id = "RegistrationNumber22"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RegistrationNumber21", "#RegistrationNumber22")}
                               onChange = {this.handleRegistrationNumber22}/>

                            <input 
                               type="text" 
                               className="RegistrationNumber-control"
                               maxLength = "1"
                               value = {this.state.data.RegistrationNumber23}
                               name = "RegistrationNumber23"
                               id = "RegistrationNumber23"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RegistrationNumber22", "#RegistrationNumber23")}
                               onChange = {this.handleRegistrationNumber23}/>

                             <input 
                               type="text" 
                               className="RegistrationNumber-control"
                               maxLength = "1"
                               value = {this.state.data.RegistrationNumber24}
                               name = "RegistrationNumber24"
                               id = "RegistrationNumber24"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RegistrationNumber23", "#RegistrationNumber24")}
                               onChange = {this.handleRegistrationNumber24}/>

                             <input 
                               type="text" 
                               className="RegistrationNumber-control"
                               maxLength = "1"
                               value = {this.state.data.RegistrationNumber25}
                               name = "RegistrationNumber25"
                               id = "RegistrationNumber25"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RegistrationNumber24", "#RegistrationNumber25")}
                               onChange = {this.handleRegistrationNumber25}/>

                             <input 
                               type="text" 
                               className="RegistrationNumber-control"
                               maxLength = "1"
                               value = {this.state.data.RegistrationNumber26}
                               name = "RegistrationNumber26"
                               id = "RegistrationNumber26"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RegistrationNumber25", "#RegistrationNumber26")}
                               onChange = {this.handleRegistrationNumber26}/>

                             <input 
                               type="text" 
                               className="RegistrationNumber-control"
                               maxLength = "1"
                               value = {this.state.data.RegistrationNumber27}
                               name = "RegistrationNumber27"
                               id = "RegistrationNumber27"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RegistrationNumber26", "#RegistrationNumber27")}
                               onChange = {this.handleRegistrationNumber27}/>

                             <input 
                               type="text" 
                               className="RegistrationNumber-control"
                               maxLength = "1"
                               value = {this.state.data.RegistrationNumber28}
                               name = "RegistrationNumber28"
                               id = "RegistrationNumber28"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RegistrationNumber27", "#RegistrationNumber28")}
                               onChange = {this.handleRegistrationNumber28}/>

                             <input 
                               type="text" 
                               className="RegistrationNumber-control"
                               maxLength = "1"
                               value = {this.state.data.RegistrationNumber29}
                               name = "RegistrationNumber29"
                               id = "RegistrationNumber29"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RegistrationNumber28", "#RegistrationNumber29")}
                               onChange = {this.handleRegistrationNumber29}/>

                             <input 
                               type="text" 
                               className="RegistrationNumber-control"
                               maxLength = "1"
                               value = {this.state.data.RegistrationNumber30}
                               name = "RegistrationNumber30"
                               id = "RegistrationNumber30"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RegistrationNumber29", "#RegistrationNumber30")}
                               onChange = {this.handleRegistrationNumber30}/>
                             
                            <br/>
                    </div>

                    {/* Twelth Component */}

                    <div className = "ColouredLabel"> 
                    <label > &nbsp;&nbsp;12 &nbsp; In case of a person, who is required to quote Aadhaar number or the Enrolment ID of Aadhaar application form as per section 139 AA</label>
                    </div>
                   
                    <div className= "divtwelve">
            
                               
                             <label  className ="twelve twelve_td" > &nbsp;&nbsp;Please mention your AADHAAR number (if allotted) </label>
                              
                             
                             <input 
                               type="text" 
                               className="AadhaarNumber-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarNumber1}
                               name = "AadhaarNumber1"
                               id = "AadhaarNumber1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarNumber1", "#AadhaarNumber1")}
                               onChange = {this.handleAadhaarNumber1}/>

                            <input 
                               type="text" 
                               className="AadhaarNumber-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarNumber2}
                               name = "AadhaarNumber2"
                               id = "AadhaarNumber2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarNumber1", "#AadhaarNumber2")}
                               onChange = {this.handleAadhaarNumber2}/>

                            <input 
                               type="text" 
                               className="AadhaarNumber-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarNumber3}
                               name = "AadhaarNumber3"
                               id = "AadhaarNumber3"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarNumber2", "#AadhaarNumber3")}
                               onChange = {this.handleAadhaarNumber3}/>

                            <input 
                               type="text" 
                               className="AadhaarNumber-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarNumber4}
                               name = "AadhaarNumber4"
                               id = "AadhaarNumber4"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarNumber3", "#AadhaarNumber4")}
                               onChange = {this.handleAadhaarNumber4}/>

                            <input 
                               type="text" 
                               className="AadhaarNumber-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarNumber5}
                               name = "AadhaarNumber5"
                               id = "AadhaarNumber5"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarNumber4", "#AadhaarNumber5")}
                               onChange = {this.handleAadhaarNumber5}/> 

                             <input 
                               type="text" 
                               className="AadhaarNumber-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarNumber6}
                               name = "AadhaarNumber6"
                               id = "AadhaarNumber6"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarNumber5", "#AadhaarNumber6")}
                               onChange = {this.handleAadhaarNumber6}/>

                             <input 
                               type="text" 
                               className="AadhaarNumber-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarNumber7}
                               name = "AadhaarNumber7"
                               id = "AadhaarNumber7"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarNumber6", "#AadhaarNumber7")}
                               onChange = {this.handleAadhaarNumber7}/>

                             <input 
                               type="text" 
                               className="AadhaarNumber-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarNumber8}
                               name = "AadhaarNumber8"
                               id = "AadhaarNumber8"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarNumber7", "#AadhaarNumber8")}
                               onChange = {this.handleAadhaarNumber8}/> 

                             <input 
                               type="text" 
                               className="AadhaarNumber-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarNumber9}
                               name = "AadhaarNumber9"
                               id = "AadhaarNumber9"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarNumber8", "#AadhaarNumber9")}
                               onChange = {this.handleAadhaarNumber9}/>

                             <input 
                               type="text" 
                               className="AadhaarNumber-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarNumber10}
                               name = "AadhaarNumber10"
                               id = "AadhaarNumber10"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarNumber9", "#AadhaarNumber10")}
                               onChange = {this.handleAadhaarNumber10}/>

                            <input 
                               type="text" 
                               className="AadhaarNumber-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarNumber11}
                               name = "AadhaarNumber11"
                               id = "AadhaarNumber11"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarNumber10", "#AadhaarNumber11")}
                               onChange = {this.handleAadhaarNumber11}/>

                             <input 
                               type="text" 
                               className="AadhaarNumber-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarNumber12}
                               name = "AadhaarNumber12"
                               id = "AadhaarNumber12"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarNumber11", "#AadhaarNumber12")}
                               onChange = {this.handleAadhaarNumber12}/> 

                                 {this.state.isIndicatorEnabled === false ? 
                                 <span className="tooltip" style={{marginLeft:"26%"}}>
                            <img src={indicator} style={{width:"2.4%",height:"2.4%", marginLeft: "5.2%"}} />
                                <img src={aadhaarnumber} className="tooltiptext" style={{width:"600px",height:"70px"}}  />
                            </span>  
                            : ""}
                             <br/>

                              
                       
                    </div>

                    <label className="FirstLabel"> If AADHAAR number is not allotted, please mention the enrolment ID of Aadhaar application form </label> <br/>

                    <div className= "Left_space_input">   
                            
                    <input 
                               type="text" 
                               className="EnrolmentId-control"
                               maxLength = "1"
                               value = {this.state.data.EnrolmentId1}
                               name = "EnrolmentId1"
                               id = "EnrolmentId1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#EnrolmentId1", "#EnrolmentId1")}
                               onChange = {this.handleEnrolmentId1}/>

                            <input 
                               type="text" 
                               className="EnrolmentId-control"
                               maxLength = "1"
                               value = {this.state.data.EnrolmentId2}
                               name = "EnrolmentId2"
                               id = "EnrolmentId2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#EnrolmentId1", "#EnrolmentId2")}
                               onChange = {this.handleEnrolmentId2}/>

                            <input 
                               type="text" 
                               className="EnrolmentId-control"
                               maxLength = "1"
                               value = {this.state.data.EnrolmentId3}
                               name = "EnrolmentId3"
                               id = "EnrolmentId3"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#EnrolmentId2", "#EnrolmentId3")}
                               onChange = {this.handleEnrolmentId3}/>

                            <input 
                               type="text" 
                               className="EnrolmentId-control"
                               maxLength = "1"
                               value = {this.state.data.EnrolmentId4}
                               name = "EnrolmentId4"
                               id = "EnrolmentId4"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#EnrolmentId3", "#EnrolmentId4")}
                               onChange = {this.handleEnrolmentId4}/>

                            <input 
                               type="text" 
                               className="EnrolmentId-control"
                               maxLength = "1"
                               value = {this.state.data.EnrolmentId5}
                               name = "EnrolmentId5"
                               id = "EnrolmentId5"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#EnrolmentId4", "#EnrolmentId5")}
                               onChange = {this.handleEnrolmentId5}/> 

                             <input 
                               type="text" 
                               className="EnrolmentId-control"
                               maxLength = "1"
                               value = {this.state.data.EnrolmentId6}
                               name = "EnrolmentId6"
                               id = "EnrolmentId6"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#EnrolmentId5", "#EnrolmentId6")}
                               onChange = {this.handleEnrolmentId6}/>

                             <input 
                               type="text" 
                               className="EnrolmentId-control"
                               maxLength = "1"
                               value = {this.state.data.EnrolmentId7}
                               name = "EnrolmentId7"
                               id = "EnrolmentId7"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#EnrolmentId6", "#EnrolmentId7")}
                               onChange = {this.handleEnrolmentId7}/>

                             <input 
                               type="text" 
                               className="EnrolmentId-control"
                               maxLength = "1"
                               value = {this.state.data.EnrolmentId8}
                               name = "EnrolmentId8"
                               id = "EnrolmentId8"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#EnrolmentId7", "#EnrolmentId8")}
                               onChange = {this.handleEnrolmentId8}/> 

                             <input 
                               type="text" 
                               className="EnrolmentId-control"
                               maxLength = "1"
                               value = {this.state.data.EnrolmentId9}
                               name = "EnrolmentId9"
                               id = "EnrolmentId9"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#EnrolmentId8", "#EnrolmentId9")}
                               onChange = {this.handleEnrolmentId9}/>

                             <input 
                               type="text" 
                               className="EnrolmentId-control"
                               maxLength = "1"
                               value = {this.state.data.EnrolmentId10}
                               name = "EnrolmentId10"
                               id = "EnrolmentId10"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#EnrolmentId9", "#EnrolmentId10")}
                               onChange = {this.handleEnrolmentId10}/>

                            <input 
                               type="text" 
                               className="EnrolmentId-control"
                               maxLength = "1"
                               value = {this.state.data.EnrolmentId11}
                               name = "EnrolmentId11"
                               id = "EnrolmentId11"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#EnrolmentId10", "#EnrolmentId11")}
                               onChange = {this.handleEnrolmentId11}/>

                             <input 
                               type="text" 
                               className="EnrolmentId-control"
                               maxLength = "1"
                               value = {this.state.data.EnrolmentId12}
                               name = "EnrolmentId12"
                               id = "EnrolmentId12"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#EnrolmentId11", "#EnrolmentId12")}
                               onChange = {this.handleEnrolmentId12}/> 

                             <input 
                               type="text" 
                               className="EnrolmentId-control"
                               maxLength = "1"
                               value = {this.state.data.EnrolmentId13}
                               name = "EnrolmentId13"
                               id = "EnrolmentId13"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#EnrolmentId12", "#EnrolmentId13")}
                               onChange = {this.handleEnrolmentId13}/>

                             <input 
                               type="text" 
                               className="EnrolmentId-control"
                               maxLength = "1"
                               value = {this.state.data.EnrolmentId14}
                               name = "EnrolmentId14"
                               id = "EnrolmentId14"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#EnrolmentId13", "#EnrolmentId14")}
                               onChange = {this.handleEnrolmentId14}/>

                             <input 
                               type="text" 
                               className="EnrolmentId-control"
                               maxLength = "1"
                               value = {this.state.data.EnrolmentId15}
                               name = "EnrolmentId15"
                               id = "EnrolmentId15"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#EnrolmentId14", "#EnrolmentId15")}
                               onChange = {this.handleEnrolmentId15}/>

                            <input 
                               type="text" 
                               className="EnrolmentId-control"
                               maxLength = "1"
                               value = {this.state.data.EnrolmentId16}
                               name = "EnrolmentId16"
                               id = "EnrolmentId16"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#EnrolmentId15", "#EnrolmentId16")}
                               onChange = {this.handleEnrolmentId16}/>

                             <input 
                               type="text" 
                               className="EnrolmentId-control"
                               maxLength = "1"
                               value = {this.state.data.EnrolmentId17}
                               name = "EnrolmentId17"
                               id = "EnrolmentId17"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#EnrolmentId16", "#EnrolmentId17")}
                               onChange = {this.handleEnrolmentId17}/>

                             <input 
                               type="text" 
                               className="EnrolmentId-control"
                               maxLength = "1"
                               value = {this.state.data.EnrolmentId18}
                               name = "EnrolmentId18"
                               id = "EnrolmentId18"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#EnrolmentId17", "#EnrolmentId18")}
                               onChange = {this.handleEnrolmentId18}/>

                             <input 
                               type="text" 
                               className="EnrolmentId-control"
                               maxLength = "1"
                               value = {this.state.data.EnrolmentId19}
                               name = "EnrolmentId19"
                               id = "EnrolmentId19"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#EnrolmentId18", "#EnrolmentId19")}
                               onChange = {this.handleEnrolmentId19}/>

                             <input 
                               type="text" 
                               className="EnrolmentId-control"
                               maxLength = "1"
                               value = {this.state.data.EnrolmentId20}
                               name = "EnrolmentId20"
                               id = "EnrolmentId20"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#EnrolmentId19", "#EnrolmentId20")}
                               onChange = {this.handleEnrolmentId20}/>

                            <input 
                               type="text" 
                               className="EnrolmentId-control"
                               maxLength = "1"
                               value = {this.state.data.EnrolmentId21}
                               name = "EnrolmentId21"
                               id = "EnrolmentId21"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#EnrolmentId20", "#EnrolmentId21")}
                               onChange = {this.handleEnrolmentId21}/>

                            <input 
                               type="text" 
                               className="EnrolmentId-control"
                               maxLength = "1"
                               value = {this.state.data.EnrolmentId22}
                               name = "EnrolmentId22"
                               id = "EnrolmentId22"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#EnrolmentId21", "#EnrolmentId22")}
                               onChange = {this.handleEnrolmentId22}/>

                            <input 
                               type="text" 
                               className="EnrolmentId-control"
                               maxLength = "1"
                               value = {this.state.data.EnrolmentId23}
                               name = "EnrolmentId23"
                               id = "EnrolmentId23"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#EnrolmentId22", "#EnrolmentId23")}
                               onChange = {this.handleEnrolmentId23}/>

                             <input 
                               type="text" 
                               className="EnrolmentId-control"
                               maxLength = "1"
                               value = {this.state.data.EnrolmentId24}
                               name = "EnrolmentId24"
                               id = "EnrolmentId24"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#EnrolmentId23", "#EnrolmentId24")}
                               onChange = {this.handleEnrolmentId24}/>

                             <input 
                               type="text" 
                               className="EnrolmentId-control"
                               maxLength = "1"
                               value = {this.state.data.EnrolmentId25}
                               name = "EnrolmentId25"
                               id = "EnrolmentId25"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#EnrolmentId24", "#EnrolmentId25")}
                               onChange = {this.handleEnrolmentId25}/>

                             <input 
                               type="text" 
                               className="EnrolmentId-control"
                               maxLength = "1"
                               value = {this.state.data.EnrolmentId26}
                               name = "EnrolmentId26"
                               id = "EnrolmentId26"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#EnrolmentId25", "#EnrolmentId26")}
                               onChange = {this.handleEnrolmentId26}/>

                             <input 
                               type="text" 
                               className="EnrolmentId-control"
                               maxLength = "1"
                               value = {this.state.data.EnrolmentId27}
                               name = "EnrolmentId27"
                               id = "EnrolmentId27"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#EnrolmentId26", "#EnrolmentId27")}
                               onChange = {this.handleEnrolmentId27}/>

                             <input 
                               type="text" 
                               className="EnrolmentId-control"
                               maxLength = "1"
                               value = {this.state.data.EnrolmentId28}
                               name = "EnrolmentId28"
                               id = "EnrolmentId28"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#EnrolmentId27", "#EnrolmentId28")}
                               onChange = {this.handleEnrolmentId28}/>

                            
                                   {this.state.isIndicatorEnabled === false ? 
                                 <span className="tooltip" style={{marginLeft:"3.65%"}}>
                            <img src={indicator} style={{width:"3%",height:"2.2%" , marginLeft: "-1.6%"}} />
                                <img src={enrolmentid} className="tooltiptext" style={{width:"600px",height:"180px"}}  />
                            </span>  
                            : ""}
                              <br/>

                        

                    </div>

                    <label className="FirstLabel"> Name as per AADHAAR letter or card or as per the Enrolment ID of Aadhaar application form</label>
                    {this.state.isIndicatorEnabled === false ? 
                    <span className="tooltip" style={{marginLeft:"28.55%"}}>
                            <img src={indicator} style={{width:"2.4%",height:"2.4%", marginLeft: "4.8%"}} />
                                <img src={aadhaarnamefield} className="tooltiptext" style={{width:"600px",height:"120px"}}  />
                            </span> 
                    : ""}  <br/>
                    
                    <div className = "Left_space2">
                          <div> 
                          <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarLastName1}
                               name = "AadhaarLastName1"
                               id = "AadhaarLastName1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarLastName1", "#AadhaarLastName1")}
                               onChange = {this.handleAadhaarLastName1}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarLastName2}
                               name = "AadhaarLastName2"
                               id = "AadhaarLastName2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarLastName1", "#AadhaarLastName2")}
                               onChange = {this.handleAadhaarLastName2}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarLastName3}
                               name = "AadhaarLastName3"
                               id = "AadhaarLastName3"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarLastName2", "#AadhaarLastName3")}
                               onChange = {this.handleAadhaarLastName3}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarLastName4}
                               name = "AadhaarLastName4"
                               id = "AadhaarLastName4"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarLastName3", "#AadhaarLastName4")}
                               onChange = {this.handleAadhaarLastName4}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarLastName5}
                               name = "AadhaarLastName5"
                               id = "AadhaarLastName5"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarLastName4", "#AadhaarLastName5")}
                               onChange = {this.handleAadhaarLastName5}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarLastName6}
                               name = "AadhaarLastName6"
                               id = "AadhaarLastName6"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarLastName5", "#AadhaarLastName6")}
                               onChange = {this.handleAadhaarLastName6}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarLastName7}
                               name = "AadhaarLastName7"
                               id = "AadhaarLastName7"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarLastName6", "#AadhaarLastName7")}
                               onChange = {this.handleAadhaarLastName7}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarLastName8}
                               name = "AadhaarLastName8"
                               id = "AadhaarLastName8"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarLastName7", "#AadhaarLastName8")}
                               onChange = {this.handleAadhaarLastName8}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarLastName9}
                               name = "AadhaarLastName9"
                               id = "AadhaarLastName9"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarLastName8", "#AadhaarLastName9")}
                               onChange = {this.handleAadhaarLastName9}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarLastName10}
                               name = "AadhaarLastName10"
                               id = "AadhaarLastName10"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarLastName9", "#AadhaarLastName10")}
                               onChange = {this.handleAadhaarLastName10}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarLastName11}
                               name = "AadhaarLastName11"
                               id = "AadhaarLastName11"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarLastName10", "#AadhaarLastName11")}
                               onChange = {this.handleAadhaarLastName11}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarLastName12}
                               name = "AadhaarLastName12"
                               id = "AadhaarLastName12"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarLastName11", "#AadhaarLastName12")}
                               onChange = {this.handleAadhaarLastName12}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarLastName13}
                               name = "AadhaarLastName13"
                               id = "AadhaarLastName13"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarLastName12", "#AadhaarLastName13")}
                               onChange = {this.handleAadhaarLastName13}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarLastName14}
                               name = "AadhaarLastName14"
                               id = "AadhaarLastName14"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarLastName13", "#AadhaarLastName14")}
                               onChange = {this.handleAadhaarLastName14}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarLastName15}
                               name = "AadhaarLastName15"
                               id = "AadhaarLastName15"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarLastName14", "#AadhaarLastName15")}
                               onChange = {this.handleAadhaarLastName15}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarLastName16}
                               name = "AadhaarLastName16"
                               id = "AadhaarLastName16"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarLastName15", "#AadhaarLastName16")}
                               onChange = {this.handleAadhaarLastName16}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarLastName17}
                               name = "AadhaarLastName17"
                               id = "AadhaarLastName17"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarLastName16", "#AadhaarLastName17")}
                               onChange = {this.handleAadhaarLastName17}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarLastName18}
                               name = "AadhaarLastName18"
                               id = "AadhaarLastName18"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarLastName17", "#AadhaarLastName18")}
                               onChange = {this.handleAadhaarLastName18}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarLastName19}
                               name = "AadhaarLastName19"
                               id = "AadhaarLastName19"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarLastName18", "#AadhaarLastName19")}
                               onChange = {this.handleAadhaarLastName19}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarLastName20}
                               name = "AadhaarLastName20"
                               id = "AadhaarLastName20"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarLastName19", "#AadhaarLastName20")}
                               onChange = {this.handleAadhaarLastName20}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarLastName21}
                               name = "AadhaarLastName21"
                               id = "AadhaarLastName21"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarLastName20", "#AadhaarLastName21")}
                               onChange = {this.handleAadhaarLastName21}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarLastName22}
                               name = "AadhaarLastName22"
                               id = "AadhaarLastName22"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarLastName21", "#AadhaarLastName22")}
                               onChange = {this.handleAadhaarLastName22}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarLastName23}
                               name = "AadhaarLastName23"
                               id = "AadhaarLastName23"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarLastName22", "#AadhaarLastName23")}
                               onChange = {this.handleAadhaarLastName23}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarLastName24}
                               name = "AadhaarLastName24"
                               id = "AadhaarLastName24"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarLastName23", "#AadhaarLastName24")}
                               onChange = {this.handleAadhaarLastName24}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarLastName25}
                               name = "AadhaarLastName25"
                               id = "AadhaarLastName25"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarLastName24", "#AadhaarLastName25")}
                               onChange = {this.handleAadhaarLastName25}/>

                    {this.state.isIndicatorEnabled === false ? 
                             <span className="tooltip" style={{marginLeft:"4.4%"}}>
                          <img src={indicator} style={{width:"3.3%",height:"3.3%"}} />
                            <label className="tooltiptext tooltiptextLabel" style={{width:"450px",height:"20px"}}>Please enter name as in aadhaar card</label>
                         </span>
                         : ""}
                          <br/>
                           </div>
                         
                           <div>
                           <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarFirstName1}
                               name = "AadhaarFirstName1"
                               id = "AadhaarFirstName1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarFirstName1", "#AadhaarFirstName1")}
                               onChange = {this.handleAadhaarFirstName1}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarFirstName2}
                               name = "AadhaarFirstName2"
                               id = "AadhaarFirstName2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarFirstName1", "#AadhaarFirstName2")}
                               onChange = {this.handleAadhaarFirstName2}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarFirstName3}
                               name = "AadhaarFirstName3"
                               id = "AadhaarFirstName3"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarFirstName2", "#AadhaarFirstName3")}
                               onChange = {this.handleAadhaarFirstName3}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarFirstName4}
                               name = "AadhaarFirstName4"
                               id = "AadhaarFirstName4"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarFirstName3", "#AadhaarFirstName4")}
                               onChange = {this.handleAadhaarFirstName4}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarFirstName5}
                               name = "AadhaarFirstName5"
                               id = "AadhaarFirstName5"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarFirstName4", "#AadhaarFirstName5")}
                               onChange = {this.handleAadhaarFirstName5}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarFirstName6}
                               name = "AadhaarFirstName6"
                               id = "AadhaarFirstName6"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarFirstName5", "#AadhaarFirstName6")}
                               onChange = {this.handleAadhaarFirstName6}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarFirstName7}
                               name = "AadhaarFirstName7"
                               id = "AadhaarFirstName7"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarFirstName6", "#AadhaarFirstName7")}
                               onChange = {this.handleAadhaarFirstName7}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarFirstName8}
                               name = "AadhaarFirstName8"
                               id = "AadhaarFirstName8"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarFirstName7", "#AadhaarFirstName8")}
                               onChange = {this.handleAadhaarFirstName8}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarFirstName9}
                               name = "AadhaarFirstName9"
                               id = "AadhaarFirstName9"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarFirstName8", "#AadhaarFirstName9")}
                               onChange = {this.handleAadhaarFirstName9}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarFirstName10}
                               name = "AadhaarFirstName10"
                               id = "AadhaarFirstName10"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarFirstName9", "#AadhaarFirstName10")}
                               onChange = {this.handleAadhaarFirstName10}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarFirstName11}
                               name = "AadhaarFirstName11"
                               id = "AadhaarFirstName11"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarFirstName10", "#AadhaarFirstName11")}
                               onChange = {this.handleAadhaarFirstName11}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarFirstName12}
                               name = "AadhaarFirstName12"
                               id = "AadhaarFirstName12"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarFirstName11", "#AadhaarFirstName12")}
                               onChange = {this.handleAadhaarFirstName12}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarFirstName13}
                               name = "AadhaarFirstName13"
                               id = "AadhaarFirstName13"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarFirstName12", "#AadhaarFirstName13")}
                               onChange = {this.handleAadhaarFirstName13}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarFirstName14}
                               name = "AadhaarFirstName14"
                               id = "AadhaarFirstName14"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarFirstName13", "#AadhaarFirstName14")}
                               onChange = {this.handleAadhaarFirstName14}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarFirstName15}
                               name = "AadhaarFirstName15"
                               id = "AadhaarFirstName15"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarFirstName14", "#AadhaarFirstName15")}
                               onChange = {this.handleAadhaarFirstName15}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarFirstName16}
                               name = "AadhaarFirstName16"
                               id = "AadhaarFirstName16"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarFirstName15", "#AadhaarFirstName16")}
                               onChange = {this.handleAadhaarFirstName16}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarFirstName17}
                               name = "AadhaarFirstName17"
                               id = "AadhaarFirstName17"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarFirstName16", "#AadhaarFirstName17")}
                               onChange = {this.handleAadhaarFirstName17}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarFirstName18}
                               name = "AadhaarFirstName18"
                               id = "AadhaarFirstName18"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarFirstName17", "#AadhaarFirstName18")}
                               onChange = {this.handleAadhaarFirstName18}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarFirstName19}
                               name = "AadhaarFirstName19"
                               id = "AadhaarFirstName19"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarFirstName18", "#AadhaarFirstName19")}
                               onChange = {this.handleAadhaarFirstName19}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarFirstName20}
                               name = "AadhaarFirstName20"
                               id = "AadhaarFirstName20"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarFirstName19", "#AadhaarFirstName20")}
                               onChange = {this.handleAadhaarFirstName20}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarFirstName21}
                               name = "AadhaarFirstName21"
                               id = "AadhaarFirstName21"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarFirstName20", "#AadhaarFirstName21")}
                               onChange = {this.handleAadhaarFirstName21}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarFirstName22}
                               name = "AadhaarFirstName22"
                               id = "AadhaarFirstName22"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarFirstName21", "#AadhaarFirstName22")}
                               onChange = {this.handleAadhaarFirstName22}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarFirstName23}
                               name = "AadhaarFirstName23"
                               id = "AadhaarFirstName23"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarFirstName22", "#AadhaarFirstName23")}
                               onChange = {this.handleAadhaarFirstName23}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarFirstName24}
                               name = "AadhaarFirstName24"
                               id = "AadhaarFirstName24"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarFirstName23", "#AadhaarFirstName24")}
                               onChange = {this.handleAadhaarFirstName24}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarFirstName25}
                               name = "AadhaarFirstName25"
                               id = "AadhaarFirstName25"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarFirstName24", "#AadhaarFirstName25")}
                               onChange = {this.handleAadhaarFirstName25}/>

                             {this.state.isIndicatorEnabled === false ?
                             <span className="tooltip" style={{marginLeft:"4.4%"}}>
                          <img src={indicator} style={{width:"3.3%",height:"3.3%"}} />
                            <label className="tooltiptext tooltiptextLabel" style={{width:"450px",height:"20px"}}>Please enter name as in aadhaar card</label>
                         </span>
                         : ""}
                           <br/>
                           </div>
 
                           <div>
                           <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarMiddleName1}
                               name = "AadhaarMiddleName1"
                               id = "AadhaarMiddleName1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarMiddleName1", "#AadhaarMiddleName1")}
                               onChange = {this.handleAadhaarMiddleName1}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarMiddleName2}
                               name = "AadhaarMiddleName2"
                               id = "AadhaarMiddleName2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarMiddleName1", "#AadhaarMiddleName2")}
                               onChange = {this.handleAadhaarMiddleName2}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarMiddleName3}
                               name = "AadhaarMiddleName3"
                               id = "AadhaarMiddleName3"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarMiddleName2", "#AadhaarMiddleName3")}
                               onChange = {this.handleAadhaarMiddleName3}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarMiddleName4}
                               name = "AadhaarMiddleName4"
                               id = "AadhaarMiddleName4"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarMiddleName3", "#AadhaarMiddleName4")}
                               onChange = {this.handleAadhaarMiddleName4}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarMiddleName5}
                               name = "AadhaarMiddleName5"
                               id = "AadhaarMiddleName5"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarMiddleName4", "#AadhaarMiddleName5")}
                               onChange = {this.handleAadhaarMiddleName5}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarMiddleName6}
                               name = "AadhaarMiddleName6"
                               id = "AadhaarMiddleName6"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarMiddleName5", "#AadhaarMiddleName6")}
                               onChange = {this.handleAadhaarMiddleName6}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarMiddleName7}
                               name = "AadhaarMiddleName7"
                               id = "AadhaarMiddleName7"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarMiddleName6", "#AadhaarMiddleName7")}
                               onChange = {this.handleAadhaarMiddleName7}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarMiddleName8}
                               name = "AadhaarMiddleName8"
                               id = "AadhaarMiddleName8"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarMiddleName7", "#AadhaarMiddleName8")}
                               onChange = {this.handleAadhaarMiddleName8}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarMiddleName9}
                               name = "AadhaarMiddleName9"
                               id = "AadhaarMiddleName9"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarMiddleName8", "#AadhaarMiddleName9")}
                               onChange = {this.handleAadhaarMiddleName9}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarMiddleName10}
                               name = "AadhaarMiddleName10"
                               id = "AadhaarMiddleName10"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarMiddleName9", "#AadhaarMiddleName10")}
                               onChange = {this.handleAadhaarMiddleName10}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarMiddleName11}
                               name = "AadhaarMiddleName11"
                               id = "AadhaarMiddleName11"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarMiddleName10", "#AadhaarMiddleName11")}
                               onChange = {this.handleAadhaarMiddleName11}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarMiddleName12}
                               name = "AadhaarMiddleName12"
                               id = "AadhaarMiddleName12"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarMiddleName11", "#AadhaarMiddleName12")}
                               onChange = {this.handleAadhaarMiddleName12}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarMiddleName13}
                               name = "AadhaarMiddleName13"
                               id = "AadhaarMiddleName13"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarMiddleName12", "#AadhaarMiddleName13")}
                               onChange = {this.handleAadhaarMiddleName13}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarMiddleName14}
                               name = "AadhaarMiddleName14"
                               id = "AadhaarMiddleName14"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarMiddleName13", "#AadhaarMiddleName14")}
                               onChange = {this.handleAadhaarMiddleName14}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarMiddleName15}
                               name = "AadhaarMiddleName15"
                               id = "AadhaarMiddleName15"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarMiddleName14", "#AadhaarMiddleName15")}
                               onChange = {this.handleAadhaarMiddleName15}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarMiddleName16}
                               name = "AadhaarMiddleName16"
                               id = "AadhaarMiddleName16"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarMiddleName15", "#AadhaarMiddleName16")}
                               onChange = {this.handleAadhaarMiddleName16}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarMiddleName17}
                               name = "AadhaarMiddleName17"
                               id = "AadhaarMiddleName17"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarMiddleName16", "#AadhaarMiddleName17")}
                               onChange = {this.handleAadhaarMiddleName17}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarMiddleName18}
                               name = "AadhaarMiddleName18"
                               id = "AadhaarMiddleName18"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarMiddleName17", "#AadhaarMiddleName18")}
                               onChange = {this.handleAadhaarMiddleName18}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarMiddleName19}
                               name = "AadhaarMiddleName19"
                               id = "AadhaarMiddleName19"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarMiddleName18", "#AadhaarMiddleName19")}
                               onChange = {this.handleAadhaarMiddleName19}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarMiddleName20}
                               name = "AadhaarMiddleName20"
                               id = "AadhaarMiddleName20"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarMiddleName19", "#AadhaarMiddleName20")}
                               onChange = {this.handleAadhaarMiddleName20}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarMiddleName21}
                               name = "AadhaarMiddleName21"
                               id = "AadhaarMiddleName21"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarMiddleName20", "#AadhaarMiddleName21")}
                               onChange = {this.handleAadhaarMiddleName21}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarMiddleName22}
                               name = "AadhaarMiddleName22"
                               id = "AadhaarMiddleName22"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarMiddleName21", "#AadhaarMiddleName22")}
                               onChange = {this.handleAadhaarMiddleName22}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarMiddleName23}
                               name = "AadhaarMiddleName23"
                               id = "AadhaarMiddleName23"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarMiddleName22", "#AadhaarMiddleName23")}
                               onChange = {this.handleAadhaarMiddleName23}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarMiddleName24}
                               name = "AadhaarMiddleName24"
                               id = "AadhaarMiddleName24"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarMiddleName23", "#AadhaarMiddleName24")}
                               onChange = {this.handleAadhaarMiddleName24}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.AadhaarMiddleName25}
                               name = "AadhaarMiddleName25"
                               id = "AadhaarMiddleName25"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#AadhaarMiddleName24", "#AadhaarMiddleName25")}
                               onChange = {this.handleAadhaarMiddleName25}/>

                             {this.state.isIndicatorEnabled === false ?
                             <span className="tooltip" style={{marginLeft:"4.4%"}}>
                          <img src={indicator} style={{width:"3.3%",height:"3.3%"}} />
                            <label className="tooltiptext tooltiptextLabel" style={{width:"450px",height:"20px"}}>Please enter name as in aadhaar card</label>
                         </span>
                         : ""}
                          <br/>
                        </div>

                    </div>

                    {/* Thirteeenth Component */}

                    <div className = "ColouredLabel">  
                       <label>&nbsp;&nbsp;13 &nbsp; Source of Income</label> 
                       <label className = "ColouredLabel Move_End2 Italic_text"> Please select,</label> 
                       <label className = "ColouredLabel"> as applicable</label> 
                       {this.state.isIndicatorEnabled === false ?
                       <span className="tooltip" style={{marginLeft:"5.3%"}}>
                            <img src={indicator} style={{width:"2.3%",height:"2.3%", marginLeft: "2%"}} />
                                <img src={sourceOfIncome} className="tooltiptext" style={{width:"600px",height:"300px"}}  />
                            </span> 
                        : ""}
                    </div>

                    <input 
                       type="checkbox" 
                       className="Check IndividualCheck "
                       value = " Salary"
                       id = "33"
                       name = "Salary"
                       disabled={!this.state.isEnabledCheck}
                       onClick={(e)=>this.handleSalaryCheck(e,"Salary")}/>                    
                    <label className = "Label_with_no_space"> Salary</label> 
                    
                     &nbsp;
                     <input 
                       type="checkbox" 
                       className="Check CapitalCheck "
                       value = "Capital Gains"
                       id = "34"
                       name = "CapitalGains"
                       disabled={!this.state.isEnabledCheck}
                       onClick={(e)=>this.handleCapitalGainsCheck(e,"CapitalGains")}/>                      
                    <label className = "Label_with_no_space"> Capital Gains</label>  <br/>

                    <input 
                       type="checkbox" 
                       className="Check IndividualCheck"
                       value = "IncomefromBusiness"
                       id = "35"
                       name = "IncomeBusiness"
                       disabled={!this.state.isEnabledCheck}
                       onClick={(e)=>this.handleIncomeBusinessCheck(e,"IncomeBusiness")}/>                    
                    <label className = "Label_with_no_space"> Income from Business / Profession</label> 

                     
                         
                      <label className = "FirstLabel"> Business/Profession code</label> 
                      <input 
                         type= "text" 
                         className = "inputBox" 
                         id = "BusinessCodeDiv" 
                         name = "BusinessCode1"
                         maxLength = "1"
                         disabled={!this.state.isEnabled}
                         value={this.state.data.BusinessCode1}
                         onChange={event => this.handleBusinessCode1(event)}/> 
                         

                      <input 
                         type= "text" 
                         className = "inputBox" 
                         id = "BusinessCodeDiv1" 
                         name = "BusinessCode2"
                         maxLength = "1"
                         disabled={!this.state.isEnabled}
                         value={this.state.data.BusinessCode2}
                         onChange={event => this.handleBusinessCode2(event)}/>  
                      

                      <label className = "Label_with_no_space"> [For Code: Refer instructions] </label> 
                     &nbsp;&nbsp;   
                     

                    <input 
                       type="checkbox" 
                       className="Check Telephone_space"
                       value = "Income from Other sources"
                       id = "36"
                       name = "IncomeOtherSource"
                       disabled={!this.state.isEnabledCheck}
                       style = {{marginLeft : "7%"}}
                       onClick={(e)=>this.handleIncomeOtherSourceCheck(e,"IncomeOtherSource")}/>                         
                    <label className = "Label_with_no_space"> Income from Other sources</label> <br/>
                    
                    <input 
                       type="checkbox" 
                       className="Check IndividualCheck"
                       value = " Income from House property"
                       id = "37"
                       name = "IncomeFromHouse"
                       disabled={!this.state.isEnabledCheck}
                       onClick={(e)=>this.handleIncomeFromHouseCheck(e,"IncomeFromHouse")}/>    
                    <label className = "Label_with_no_space"> Income from House property</label>

                    <input 
                       type="checkbox" 
                       className="Check End_space"
                       value = " No income"
                       id = "38"
                       name = "NoIncome"
                       style = {{marginLeft : "52%"}}
                       onClick={(e)=>this.handleNoIncomeCheck(e,"NoIncome")}/> 
                    <label className = "Label_with_no_space"> No income</label> <br/>

                
                    <span className="ErrorMsg">{this.state.errors.Income}</span>
                     

                    {/* Fourteenth Component */}

                    <div className = "ColouredLabel"> 
                        <label >&nbsp;&nbsp; 14 &nbsp; Representative Assessee (RA)</label>
                        {this.state.isIndicatorEnabled === false ?
                        <span className="tooltip" style={{marginLeft:"67.2%"}}>
                            <img src={indicator} style={{width:"2.3%",height:"2.3%"}} />
                                <img src={respresentativeAssessee} className="tooltiptext" style={{width:"600px",height:"180px"}}  />
                            </span> 
                        : ""}
                    </div>
                     
                    <label className="FirstLabel"> &nbsp;&nbsp; Full name, address of the Representative Assessee, who is assessible under the Income Tax Act in respect of the person, whose particulars have
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;been given in the column 1-13.</label> 
                    
                    <div className = "ColouredLabel"> 
                        <label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Full Name (Full expanded name : initials are not permitted)</label>
                    </div>

                    <label className="FirstLabel"> Please select title,</label>
                   <label className="Label_with_no_space"> as applicable</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                   <input 
                      type="checkbox" 
                      className="Check"
                      id = "18"
                      value = "3Shri"
                      name = "NameTitleThree[9][]"
                      onClick={(e)=>this.handleNameTitleThreeCheck(e,"NameTitleThree")}/>
                   <label className="Label_with_no_space"> Shri</label>

                   <input 
                      type="checkbox" 
                      className="Check"
                      id = "19"
                      value = "3Smt."
                      name = "NameTitleThree[9][]"
                      onClick={(e)=>this.handleNameTitleThreeCheck(e,"NameTitleThree")}/>
                   <label className="Label_with_no_space"> Smt.</label>

                   <input 
                      type="checkbox" 
                      className="Check"
                      id = "20"
                      value = "3Kumari"
                      name = "NameTitleThree[9][]"
                      onClick={(e)=>this.handleNameTitleThreeCheck(e,"NameTitleThree")}/>                
                   <label className="Label_with_no_space"> Kumari</label>

                   <input 
                      type="checkbox" 
                      className="Check"
                      id = "21"
                      value = "3M/s"
                      name = "NameTitleThree[9][]"
                      onClick={(e)=>this.handleNameTitleThreeCheck(e,"NameTitleThree")}/>      
                   <label className="Label_with_no_space"> M/s</label> <br />
                    
                   <table>
                   <tbody>
                      <tr>
                         <td className ="first_td">
                           {this.state.name.map((data, index) =>
                               <label className="elements"> {data} <br/></label>   
                            )}
                         </td>

                         <td className = "secondtd">
                           
                          <div> 
                          <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RALastName1}
                               name = "RALastName1"
                               id = "RALastName1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RALastName1", "#RALastName1")}
                               onChange = {this.handleRALastName1}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RALastName2}
                               name = "RALastName2"
                               id = "RALastName2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RALastName1", "#RALastName2")}
                               onChange = {this.handleRALastName2}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RALastName3}
                               name = "RALastName3"
                               id = "RALastName3"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RALastName2", "#RALastName3")}
                               onChange = {this.handleRALastName3}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RALastName4}
                               name = "RALastName4"
                               id = "RALastName4"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RALastName3", "#RALastName4")}
                               onChange = {this.handleRALastName4}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RALastName5}
                               name = "RALastName5"
                               id = "RALastName5"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RALastName4", "#RALastName5")}
                               onChange = {this.handleRALastName5}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RALastName6}
                               name = "RALastName6"
                               id = "RALastName6"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RALastName5", "#RALastName6")}
                               onChange = {this.handleRALastName6}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RALastName7}
                               name = "RALastName7"
                               id = "RALastName7"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RALastName6", "#RALastName7")}
                               onChange = {this.handleRALastName7}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RALastName8}
                               name = "RALastName8"
                               id = "RALastName8"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RALastName7", "#RALastName8")}
                               onChange = {this.handleRALastName8}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RALastName9}
                               name = "RALastName9"
                               id = "RALastName9"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RALastName8", "#RALastName9")}
                               onChange = {this.handleRALastName9}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RALastName10}
                               name = "RALastName10"
                               id = "RALastName10"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RALastName9", "#RALastName10")}
                               onChange = {this.handleRALastName10}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RALastName11}
                               name = "RALastName11"
                               id = "RALastName11"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RALastName10", "#RALastName11")}
                               onChange = {this.handleRALastName11}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RALastName12}
                               name = "RALastName12"
                               id = "RALastName12"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RALastName11", "#RALastName12")}
                               onChange = {this.handleRALastName12}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RALastName13}
                               name = "RALastName13"
                               id = "RALastName13"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RALastName12", "#RALastName13")}
                               onChange = {this.handleRALastName13}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RALastName14}
                               name = "RALastName14"
                               id = "RALastName14"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RALastName13", "#RALastName14")}
                               onChange = {this.handleRALastName14}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RALastName15}
                               name = "RALastName15"
                               id = "RALastName15"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RALastName14", "#RALastName15")}
                               onChange = {this.handleRALastName15}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RALastName16}
                               name = "RALastName16"
                               id = "RALastName16"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RALastName15", "#RALastName16")}
                               onChange = {this.handleRALastName16}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RALastName17}
                               name = "RALastName17"
                               id = "RALastName17"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RALastName16", "#RALastName17")}
                               onChange = {this.handleRALastName17}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RALastName18}
                               name = "RALastName18"
                               id = "RALastName18"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RALastName17", "#RALastName18")}
                               onChange = {this.handleRALastName18}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RALastName19}
                               name = "RALastName19"
                               id = "RALastName19"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RALastName18", "#RALastName19")}
                               onChange = {this.handleRALastName19}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RALastName20}
                               name = "RALastName20"
                               id = "RALastName20"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RALastName19", "#RALastName20")}
                               onChange = {this.handleRALastName20}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RALastName21}
                               name = "RALastName21"
                               id = "RALastName21"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RALastName20", "#RALastName21")}
                               onChange = {this.handleRALastName21}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RALastName22}
                               name = "RALastName22"
                               id = "RALastName22"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RALastName21", "#RALastName22")}
                               onChange = {this.handleRALastName22}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RALastName23}
                               name = "RALastName23"
                               id = "RALastName23"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RALastName22", "#RALastName23")}
                               onChange = {this.handleRALastName23}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RALastName24}
                               name = "RALastName24"
                               id = "RALastName24"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RALastName23", "#RALastName24")}
                               onChange = {this.handleRALastName24}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RALastName25}
                               name = "RALastName25"
                               id = "RALastName25"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RALastName24", "#RALastName25")}
                               onChange = {this.handleRALastName25}/>
                         {this.state.isIndicatorEnabled === false ?
                           <span className="tooltip" style={{marginLeft:"3.8%"}}>
                          <img src={indicator} style={{width:"3.2%",height:"3.2%"}} />
                            <img src={namefield} className="tooltiptext" style={{width:"600px",height:"150px"}}  />
                         </span>
                         : ""}
                          <br/>
                           </div>

                           <div>  
                           <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFirstName1}
                               name = "RAFirstName1"
                               id = "RAFirstName1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFirstName1", "#RAFirstName1")}
                               onChange = {this.handleRAFirstName1}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFirstName2}
                               name = "RAFirstName2"
                               id = "RAFirstName2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFirstName1", "#RAFirstName2")}
                               onChange = {this.handleRAFirstName2}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFirstName3}
                               name = "RAFirstName3"
                               id = "RAFirstName3"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFirstName2", "#RAFirstName3")}
                               onChange = {this.handleRAFirstName3}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFirstName4}
                               name = "RAFirstName4"
                               id = "RAFirstName4"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFirstName3", "#RAFirstName4")}
                               onChange = {this.handleRAFirstName4}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFirstName5}
                               name = "RAFirstName5"
                               id = "RAFirstName5"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFirstName4", "#RAFirstName5")}
                               onChange = {this.handleRAFirstName5}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFirstName6}
                               name = "RAFirstName6"
                               id = "RAFirstName6"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFirstName5", "#RAFirstName6")}
                               onChange = {this.handleRAFirstName6}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFirstName7}
                               name = "RAFirstName7"
                               id = "RAFirstName7"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFirstName6", "#RAFirstName7")}
                               onChange = {this.handleRAFirstName7}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFirstName8}
                               name = "RAFirstName8"
                               id = "RAFirstName8"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFirstName7", "#RAFirstName8")}
                               onChange = {this.handleRAFirstName8}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFirstName9}
                               name = "RAFirstName9"
                               id = "RAFirstName9"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFirstName8", "#RAFirstName9")}
                               onChange = {this.handleRAFirstName9}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFirstName10}
                               name = "RAFirstName10"
                               id = "RAFirstName10"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFirstName9", "#RAFirstName10")}
                               onChange = {this.handleRAFirstName10}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFirstName11}
                               name = "RAFirstName11"
                               id = "RAFirstName11"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFirstName10", "#RAFirstName11")}
                               onChange = {this.handleRAFirstName11}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFirstName12}
                               name = "RAFirstName12"
                               id = "RAFirstName12"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFirstName11", "#RAFirstName12")}
                               onChange = {this.handleRAFirstName12}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFirstName13}
                               name = "RAFirstName13"
                               id = "RAFirstName13"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFirstName12", "#RAFirstName13")}
                               onChange = {this.handleRAFirstName13}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFirstName14}
                               name = "RAFirstName14"
                               id = "RAFirstName14"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFirstName13", "#RAFirstName14")}
                               onChange = {this.handleRAFirstName14}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFirstName15}
                               name = "RAFirstName15"
                               id = "RAFirstName15"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFirstName14", "#RAFirstName15")}
                               onChange = {this.handleRAFirstName15}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFirstName16}
                               name = "RAFirstName16"
                               id = "RAFirstName16"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFirstName15", "#RAFirstName16")}
                               onChange = {this.handleRAFirstName16}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFirstName17}
                               name = "RAFirstName17"
                               id = "RAFirstName17"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFirstName16", "#RAFirstName17")}
                               onChange = {this.handleRAFirstName17}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFirstName18}
                               name = "RAFirstName18"
                               id = "RAFirstName18"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFirstName17", "#RAFirstName18")}
                               onChange = {this.handleRAFirstName18}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFirstName19}
                               name = "RAFirstName19"
                               id = "RAFirstName19"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFirstName18", "#RAFirstName19")}
                               onChange = {this.handleRAFirstName19}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFirstName20}
                               name = "RAFirstName20"
                               id = "RAFirstName20"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFirstName19", "#RAFirstName20")}
                               onChange = {this.handleRAFirstName20}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFirstName21}
                               name = "RAFirstName21"
                               id = "RAFirstName21"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFirstName20", "#RAFirstName21")}
                               onChange = {this.handleRAFirstName21}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFirstName22}
                               name = "RAFirstName22"
                               id = "RAFirstName22"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFirstName21", "#RAFirstName22")}
                               onChange = {this.handleRAFirstName22}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFirstName23}
                               name = "RAFirstName23"
                               id = "RAFirstName23"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFirstName22", "#RAFirstName23")}
                               onChange = {this.handleRAFirstName23}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFirstName24}
                               name = "RAFirstName24"
                               id = "RAFirstName24"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFirstName23", "#RAFirstName24")}
                               onChange = {this.handleRAFirstName24}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFirstName25}
                               name = "RAFirstName25"
                               id = "RAFirstName25"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFirstName24", "#RAFirstName25")}
                               onChange = {this.handleRAFirstName25}/>

                         {this.state.isIndicatorEnabled === false ?
                           <span className="tooltip" style={{marginLeft:"3.8%"}}>
                          <img src={indicator} style={{width:"3.2%",height:"3.2%"}} />
                            <img src={namefield} className="tooltiptext" style={{width:"600px",height:"150px"}}  />
                         </span>
                         : ""}
                         <br/>
                           </div>

                           <div>
                           <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAMiddleName1}
                               name = "RAMiddleName1"
                               id = "RAMiddleName1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAMiddleName1", "#RAMiddleName1")}
                               onChange = {this.handleRAMiddleName1}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAMiddleName2}
                               name = "RAMiddleName2"
                               id = "RAMiddleName2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAMiddleName1", "#RAMiddleName2")}
                               onChange = {this.handleRAMiddleName2}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAMiddleName3}
                               name = "RAMiddleName3"
                               id = "RAMiddleName3"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAMiddleName2", "#RAMiddleName3")}
                               onChange = {this.handleRAMiddleName3}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAMiddleName4}
                               name = "RAMiddleName4"
                               id = "RAMiddleName4"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAMiddleName3", "#RAMiddleName4")}
                               onChange = {this.handleRAMiddleName4}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAMiddleName5}
                               name = "RAMiddleName5"
                               id = "RAMiddleName5"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAMiddleName4", "#RAMiddleName5")}
                               onChange = {this.handleRAMiddleName5}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAMiddleName6}
                               name = "RAMiddleName6"
                               id = "RAMiddleName6"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAMiddleName5", "#RAMiddleName6")}
                               onChange = {this.handleRAMiddleName6}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAMiddleName7}
                               name = "RAMiddleName7"
                               id = "RAMiddleName7"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAMiddleName6", "#RAMiddleName7")}
                               onChange = {this.handleRAMiddleName7}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAMiddleName8}
                               name = "RAMiddleName8"
                               id = "RAMiddleName8"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAMiddleName7", "#RAMiddleName8")}
                               onChange = {this.handleRAMiddleName8}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAMiddleName9}
                               name = "RAMiddleName9"
                               id = "RAMiddleName9"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAMiddleName8", "#RAMiddleName9")}
                               onChange = {this.handleRAMiddleName9}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAMiddleName10}
                               name = "RAMiddleName10"
                               id = "RAMiddleName10"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAMiddleName9", "#RAMiddleName10")}
                               onChange = {this.handleRAMiddleName10}/>
response
                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAMiddleName11}
                               name = "RAMiddleName11"
                               id = "RAMiddleName11"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAMiddleName10", "#RAMiddleName11")}
                               onChange = {this.handleRAMiddleName11}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAMiddleName12}
                               name = "RAMiddleName12"
                               id = "RAMiddleName12"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAMiddleName11", "#RAMiddleName12")}
                               onChange = {this.handleRAMiddleName12}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAMiddleName13}
                               name = "RAMiddleName13"
                               id = "RAMiddleName13"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAMiddleName12", "#RAMiddleName13")}
                               onChange = {this.handleRAMiddleName13}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAMiddleName14}
                               name = "RAMiddleName14"
                               id = "RAMiddleName14"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAMiddleName13", "#RAMiddleName14")}
                               onChange = {this.handleRAMiddleName14}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAMiddleName15}
                               name = "RAMiddleName15"
                               id = "RAMiddleName15"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAMiddleName14", "#RAMiddleName15")}
                               onChange = {this.handleRAMiddleName15}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAMiddleName16}
                               name = "RAMiddleName16"
                               id = "RAMiddleName16"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAMiddleName15", "#RAMiddleName16")}
                               onChange = {this.handleRAMiddleName16}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAMiddleName17}
                               name = "RAMiddleName17"
                               id = "RAMiddleName17"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAMiddleName16", "#RAMiddleName17")}
                               onChange = {this.handleRAMiddleName17}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAMiddleName18}
                               name = "RAMiddleName18"
                               id = "RAMiddleName18"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAMiddleName17", "#RAMiddleName18")}
                               onChange = {this.handleRAMiddleName18}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAMiddleName19}
                               name = "RAMiddleName19"
                               id = "RAMiddleName19"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAMiddleName18", "#RAMiddleName19")}
                               onChange = {this.handleRAMiddleName19}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAMiddleName20}
                               name = "RAMiddleName20"
                               id = "RAMiddleName20"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAMiddleName19", "#RAMiddleName20")}
                               onChange = {this.handleRAMiddleName20}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAMiddleName21}
                               name = "RAMiddleName21"
                               id = "RAMiddleName21"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAMiddleName20", "#RAMiddleName21")}
                               onChange = {this.handleRAMiddleName21}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAMiddleName22}
                               name = "RAMiddleName22"
                               id = "RAMiddleName22"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAMiddleName21", "#RAMiddleName22")}
                               onChange = {this.handleRAMiddleName22}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAMiddleName23}
                               name = "RAMiddleName23"
                               id = "RAMiddleName23"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAMiddleName22", "#RAMiddleName23")}
                               onChange = {this.handleRAMiddleName23}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAMiddleName24}
                               name = "RAMiddleName24"
                               id = "RAMiddleName24"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAMiddleName23", "#RAMiddleName24")}
                               onChange = {this.handleRAMiddleName24}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAMiddleName25}
                               name = "RAMiddleName25"
                               id = "RAMiddleName25"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAMiddleName24", "#RAMiddleName25")}
                               onChange = {this.handleRAMiddleName25}/>
                             {this.state.isIndicatorEnabled === false ?
                           <span className="tooltip" style={{marginLeft:"3.8%"}}>
                          <img src={indicator} style={{width:"3.2%",height:"3.2%"}} />
                            <img src={namefield} className="tooltiptext" style={{width:"600px",height:"150px"}}  />
                         </span>
                         : ""}

                            <br/>
                            <span className="ErrorMsg">{this.state.errors.NameTitleThree}</span>
                            </div>
                         </td>
                      </tr>
                   </tbody>
                   </table>

                   <div className = "ColouredLabel"> 
                       <label >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Address</label>

                   </div>

                   <table>
                   <tbody>
                      <tr>
                         <td className ="first_td">
                            {this.state.addressTwo.map((data, index) =>
                               <label className="elements"> {data} <br/></label>   
                            )}
                         </td>

                         <td className = "secondtd">
                          
                          <div> 
                          <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFlat1}
                               name = "RAFlat1"
                               id = "RAFlat1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFlat1", "#RAFlat1")}
                               onChange = {this.handleRAFlat1}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFlat2}
                               name = "RAFlat2"
                               id = "RAFlat2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFlat1", "#RAFlat2")}
                               onChange = {this.handleRAFlat2}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFlat3}
                               name = "RAFlat3"
                               id = "RAFlat3"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFlat2", "#RAFlat3")}
                               onChange = {this.handleRAFlat3}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFlat4}
                               name = "RAFlat4"
                               id = "RAFlat4"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFlat3", "#RAFlat4")}
                               onChange = {this.handleRAFlat4}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFlat5}
                               name = "RAFlat5"
                               id = "RAFlat5"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFlat4", "#RAFlat5")}
                               onChange = {this.handleRAFlat5}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFlat6}
                               name = "RAFlat6"
                               id = "RAFlat6"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFlat5", "#RAFlat6")}
                               onChange = {this.handleRAFlat6}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFlat7}
                               name = "RAFlat7"
                               id = "RAFlat7"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFlat6", "#RAFlat7")}
                               onChange = {this.handleRAFlat7}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFlat8}
                               name = "RAFlat8"
                               id = "RAFlat8"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFlat7", "#RAFlat8")}
                               onChange = {this.handleRAFlat8}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFlat9}
                               name = "RAFlat9"
                               id = "RAFlat9"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFlat8", "#RAFlat9")}
                               onChange = {this.handleRAFlat9}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFlat10}
                               name = "RAFlat10"
                               id = "RAFlat10"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFlat9", "#RAFlat10")}
                               onChange = {this.handleRAFlat10}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFlat11}
                               name = "RAFlat11"
                               id = "RAFlat11"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFlat10", "#RAFlat11")}
                               onChange = {this.handleRAFlat11}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFlat12}
                               name = "RAFlat12"
                               id = "RAFlat12"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFlat11", "#RAFlat12")}
                               onChange = {this.handleRAFlat12}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFlat13}
                               name = "RAFlat13"
                               id = "RAFlat13"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFlat12", "#RAFlat13")}
                               onChange = {this.handleRAFlat13}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFlat14}
                               name = "RAFlat14"
                               id = "RAFlat14"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFlat13", "#RAFlat14")}
                               onChange = {this.handleRAFlat14}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFlat15}
                               name = "RAFlat15"
                               id = "RAFlat15"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFlat14", "#RAFlat15")}
                               onChange = {this.handleRAFlat15}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFlat16}
                               name = "RAFlat16"
                               id = "RAFlat16"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFlat15", "#RAFlat16")}
                               onChange = {this.handleRAFlat16}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFlat17}
                               name = "RAFlat17"
                               id = "RAFlat17"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFlat16", "#RAFlat17")}
                               onChange = {this.handleRAFlat17}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFlat18}
                               name = "RAFlat18"
                               id = "RAFlat18"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFlat17", "#RAFlat18")}
                               onChange = {this.handleRAFlat18}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFlat19}
                               name = "RAFlat19"
                               id = "RAFlat19"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFlat18", "#RAFlat19")}
                               onChange = {this.handleRAFlat19}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFlat20}
                               name = "RAFlat20"
                               id = "RAFlat20"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFlat19", "#RAFlat20")}
                               onChange = {this.handleRAFlat20}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFlat21}
                               name = "RAFlat21"
                               id = "RAFlat21"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFlat20", "#RAFlat21")}
                               onChange = {this.handleRAFlat21}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFlat22}
                               name = "RAFlat22"
                               id = "RAFlat22"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFlat21", "#RAFlat22")}
                               onChange = {this.handleRAFlat22}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFlat23}
                               name = "RAFlat23"
                               id = "RAFlat23"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFlat22", "#RAFlat23")}
                               onChange = {this.handleRAFlat23}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFlat24}
                               name = "RAFlat24"
                               id = "RAFlat24"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFlat23", "#RAFlat24")}
                               onChange = {this.handleRAFlat24}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAFlat25}
                               name = "RAFlat25"
                               id = "RAFlat25"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAFlat24", "#RAFlat25")}
                               onChange = {this.handleRAFlat25}/>
                             {this.state.isIndicatorEnabled === false ?
                           <span className="tooltip" style={{marginLeft:"3.8%"}}>
                          <img src={indicator} style={{width:"3.2%",height:"3.2%"}} />
                            <label className="tooltiptext tooltiptextLabel" style={{width:"450px",height:"20px"}}>Please enter combinations of alphabet, numbers, -, /, '</label>
                         </span>
                         : ""}
                          <br/>
                           </div>

                           <div>
                           <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAPremises1}
                               name = "RAPremises1"
                               id = "RAPremises1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAPremises1", "#RAPremises1")}
                               onChange = {this.handleRAPremises1}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAPremises2}
                               name = "RAPremises2"
                               id = "RAPremises2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAPremises1", "#RAPremises2")}
                               onChange = {this.handleRAPremises2}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAPremises3}
                               name = "RAPremises3"
                               id = "RAPremises3"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAPremises2", "#RAPremises3")}
                               onChange = {this.handleRAPremises3}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAPremises4}
                               name = "RAPremises4"
                               id = "RAPremises4"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAPremises3", "#RAPremises4")}
                               onChange = {this.handleRAPremises4}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAPremises5}
                               name = "RAPremises5"
                               id = "RAPremises5"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAPremises4", "#RAPremises5")}
                               onChange = {this.handleRAPremises5}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAPremises6}
                               name = "RAPremises6"
                               id = "RAPremises6"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAPremises5", "#RAPremises6")}
                               onChange = {this.handleRAPremises6}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAPremises7}
                               name = "RAPremises7"
                               id = "RAPremises7"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAPremises6", "#RAPremises7")}
                               onChange = {this.handleRAPremises7}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAPremises8}
                               name = "RAPremises8"
                               id = "RAPremises8"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAPremises7", "#RAPremises8")}
                               onChange = {this.handleRAPremises8}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAPremises9}
                               name = "RAPremises9"
                               id = "RAPremises9"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAPremises8", "#RAPremises9")}
                               onChange = {this.handleRAPremises9}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAPremises10}
                               name = "RAPremises10"
                               id = "RAPremises10"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAPremises9", "#RAPremises10")}
                               onChange = {this.handleRAPremises10}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAPremises11}
                               name = "RAPremises11"
                               id = "RAPremises11"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAPremises10", "#RAPremises11")}
                               onChange = {this.handleRAPremises11}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAPremises12}
                               name = "RAPremises12"
                               id = "RAPremises12"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAPremises11", "#RAPremises12")}
                               onChange = {this.handleRAPremises12}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAPremises13}
                               name = "RAPremises13"
                               id = "RAPremises13"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAPremises12", "#RAPremises13")}
                               onChange = {this.handleRAPremises13}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAPremises14}
                               name = "RAPremises14"
                               id = "RAPremises14"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAPremises13", "#RAPremises14")}
                               onChange = {this.handleRAPremises14}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAPremises15}
                               name = "RAPremises15"
                               id = "RAPremises15"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAPremises14", "#RAPremises15")}
                               onChange = {this.handleRAPremises15}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAPremises16}
                               name = "RAPremises16"
                               id = "RAPremises16"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAPremises15", "#RAPremises16")}
                               onChange = {this.handleRAPremises16}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAPremises17}
                               name = "RAPremises17"
                               id = "RAPremises17"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAPremises16", "#RAPremises17")}
                               onChange = {this.handleRAPremises17}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAPremises18}
                               name = "RAPremises18"
                               id = "RAPremises18"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAPremises17", "#RAPremises18")}
                               onChange = {this.handleRAPremises18}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAPremises19}
                               name = "RAPremises19"
                               id = "RAPremises19"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAPremises18", "#RAPremises19")}
                               onChange = {this.handleRAPremises19}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAPremises20}
                               name = "RAPremises20"
                               id = "RAPremises20"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAPremises19", "#RAPremises20")}
                               onChange = {this.handleRAPremises20}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAPremises21}
                               name = "RAPremises21"
                               id = "RAPremises21"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAPremises20", "#RAPremises21")}
                               onChange = {this.handleRAPremises21}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAPremises22}
                               name = "RAPremises22"
                               id = "RAPremises22"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAPremises21", "#RAPremises22")}
                               onChange = {this.handleRAPremises22}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAPremises23}
                               name = "RAPremises23"
                               id = "RAPremises23"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAPremises22", "#RAPremises23")}
                               onChange = {this.handleRAPremises23}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAPremises24}
                               name = "RAPremises24"
                               id = "RAPremises24"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAPremises23", "#RAPremises24")}
                               onChange = {this.handleRAPremises24}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAPremises25}
                               name = "RAPremises25"
                               id = "RAPremises25"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAPremises24", "#RAPremises25")}
                               onChange = {this.handleRAPremises25}/>

                             {this.state.isIndicatorEnabled === false ?
                            <span className="tooltip" style={{marginLeft:"3.8%"}}>
                            <img src={indicator} style={{width:"3.2%",height:"3.2%"}} />
                                <label className="tooltiptext tooltiptextLabel" style={{width:"450px",height:"20px"}}>Please enter combinations of alphabet, numbers</label>
                            </span>
                            : ""}
                          <br/>
                           </div>
                            
                           <div>
                           <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RARoad1}
                               name = "RARoad1"
                               id = "RARoad1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RARoad1", "#RARoad1")}
                               onChange = {this.handleRARoad1}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RARoad2}
                               name = "RARoad2"
                               id = "RARoad2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RARoad1", "#RARoad2")}
                               onChange = {this.handleRARoad2}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RARoad3}
                               name = "RARoad3"
                               id = "RARoad3"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RARoad2", "#RARoad3")}
                               onChange = {this.handleRARoad3}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RARoad4}
                               name = "RARoad4"
                               id = "RARoad4"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RARoad3", "#RARoad4")}
                               onChange = {this.handleRARoad4}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RARoad5}
                               name = "RARoad5"
                               id = "RARoad5"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RARoad4", "#RARoad5")}
                               onChange = {this.handleRARoad5}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RARoad6}
                               name = "RARoad6"
                               id = "RARoad6"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RARoad5", "#RARoad6")}
                               onChange = {this.handleRARoad6}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RARoad7}
                               name = "RARoad7"
                               id = "RARoad7"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RARoad6", "#RARoad7")}
                               onChange = {this.handleRARoad7}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RARoad8}
                               name = "RARoad8"
                               id = "RARoad8"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RARoad7", "#RARoad8")}
                               onChange = {this.handleRARoad8}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RARoad9}
                               name = "RARoad9"
                               id = "RARoad9"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RARoad8", "#RARoad9")}
                               onChange = {this.handleRARoad9}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RARoad10}
                               name = "RARoad10"
                               id = "RARoad10"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RARoad9", "#RARoad10")}
                               onChange = {this.handleRARoad10}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RARoad11}
                               name = "RARoad11"
                               id = "RARoad11"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RARoad10", "#RARoad11")}
                               onChange = {this.handleRARoad11}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RARoad12}
                               name = "RARoad12"
                               id = "RARoad12"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RARoad11", "#RARoad12")}
                               onChange = {this.handleRARoad12}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RARoad13}
                               name = "RARoad13"
                               id = "RARoad13"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RARoad12", "#RARoad13")}
                               onChange = {this.handleRARoad13}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RARoad14}
                               name = "RARoad14"
                               id = "RARoad14"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RARoad13", "#RARoad14")}
                               onChange = {this.handleRARoad14}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RARoad15}
                               name = "RARoad15"
                               id = "RARoad15"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RARoad14", "#RARoad15")}
                               onChange = {this.handleRARoad15}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RARoad16}
                               name = "RARoad16"
                               id = "RARoad16"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RARoad15", "#RARoad16")}
                               onChange = {this.handleRARoad16}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RARoad17}
                               name = "RARoad17"
                               id = "RARoad17"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RARoad16", "#RARoad17")}
                               onChange = {this.handleRARoad17}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RARoad18}
                               name = "RARoad18"
                               id = "RARoad18"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RARoad17", "#RARoad18")}
                               onChange = {this.handleRARoad18}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RARoad19}
                               name = "RARoad19"
                               id = "RARoad19"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RARoad18", "#RARoad19")}
                               onChange = {this.handleRARoad19}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RARoad20}
                               name = "RARoad20"
                               id = "RARoad20"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RARoad19", "#RARoad20")}
                               onChange = {this.handleRARoad20}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RARoad21}
                               name = "RARoad21"
                               id = "RARoad21"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RARoad20", "#RARoad21")}
                               onChange = {this.handleRARoad21}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RARoad22}
                               name = "RARoad22"
                               id = "RARoad22"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RARoad21", "#RARoad22")}
                               onChange = {this.handleRARoad22}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RARoad23}
                               name = "RARoad23"
                               id = "RARoad23"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RARoad22", "#RARoad23")}
                               onChange = {this.handleRARoad23}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RARoad24}
                               name = "RARoad24"
                               id = "RARoad24"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RARoad23", "#RARoad24")}
                               onChange = {this.handleRARoad24}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RARoad25}
                               name = "RARoad25"
                               id = "RARoad25"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RARoad24", "#RARoad25")}
                               onChange = {this.handleRARoad25}/>


                             {this.state.isIndicatorEnabled === false ?
                           <span className="tooltip" style={{marginLeft:"3.8%"}}>
                          <img src={indicator} style={{width:"3.2%",height:"3.2%"}} />
                            <label className="tooltiptext tooltiptextLabel" style={{width:"450px",height:"20px"}}>Please enter only alphabet</label>
                         </span>
                         : ""}
                         <br/>
                           </div>

                           <div>   
                           <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAArea1}
                               name = "RAArea1"
                               id = "RAArea1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAArea1", "#RAArea1")}
                               onChange = {this.handleRAArea1}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAArea2}
                               name = "RAArea2"
                               id = "RAArea2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAArea1", "#RAArea2")}
                               onChange = {this.handleRAArea2}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAArea3}
                               name = "RAArea3"
                               id = "RAArea3"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAArea2", "#RAArea3")}
                               onChange = {this.handleRAArea3}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAArea4}
                               name = "RAArea4"
                               id = "RAArea4"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAArea3", "#RAArea4")}
                               onChange = {this.handleRAArea4}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAArea5}
                               name = "RAArea5"
                               id = "RAArea5"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAArea4", "#RAArea5")}
                               onChange = {this.handleRAArea5}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAArea6}
                               name = "RAArea6"
                               id = "RAArea6"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAArea5", "#RAArea6")}
                               onChange = {this.handleRAArea6}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAArea7}
                               name = "RAArea7"
                               id = "RAArea7"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAArea6", "#RAArea7")}
                               onChange = {this.handleRAArea7}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAArea8}
                               name = "RAArea8"
                               id = "RAArea8"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAArea7", "#RAArea8")}
                               onChange = {this.handleRAArea8}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAArea9}
                               name = "RAArea9"
                               id = "RAArea9"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAArea8", "#RAArea9")}
                               onChange = {this.handleRAArea9}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAArea10}
                               name = "RAArea10"
                               id = "RAArea10"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAArea9", "#RAArea10")}
                               onChange = {this.handleRAArea10}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAArea11}
                               name = "RAArea11"
                               id = "RAArea11"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAArea10", "#RAArea11")}
                               onChange = {this.handleRAArea11}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAArea12}
                               name = "RAArea12"
                               id = "RAArea12"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAArea11", "#RAArea12")}
                               onChange = {this.handleRAArea12}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAArea13}
                               name = "RAArea13"
                               id = "RAArea13"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAArea12", "#RAArea13")}
                               onChange = {this.handleRAArea13}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAArea14}
                               name = "RAArea14"
                               id = "RAArea14"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAArea13", "#RAArea14")}
                               onChange = {this.handleRAArea14}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAArea15}
                               name = "RAArea15"
                               id = "RAArea15"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAArea14", "#RAArea15")}
                               onChange = {this.handleRAArea15}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAArea16}
                               name = "RAArea16"
                               id = "RAArea16"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAArea15", "#RAArea16")}
                               onChange = {this.handleRAArea16}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAArea17}
                               name = "RAArea17"
                               id = "RAArea17"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAArea16", "#RAArea17")}
                               onChange = {this.handleRAArea17}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAArea18}
                               name = "RAArea18"
                               id = "RAArea18"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAArea17", "#RAArea18")}
                               onChange = {this.handleRAArea18}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAArea19}
                               name = "RAArea19"
                               id = "RAArea19"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAArea18", "#RAArea19")}
                               onChange = {this.handleRAArea19}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAArea20}
                               name = "RAArea20"
                               id = "RAArea20"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAArea19", "#RAArea20")}
                               onChange = {this.handleRAArea20}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAArea21}
                               name = "RAArea21"
                               id = "RAArea21"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAArea20", "#RAArea21")}
                               onChange = {this.handleRAArea21}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAArea22}
                               name = "RAArea22"
                               id = "RAArea22"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAArea21", "#RAArea22")}
                               onChange = {this.handleRAArea22}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAArea23}
                               name = "RAArea23"
                               id = "RAArea23"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAArea22", "#RAArea23")}
                               onChange = {this.handleRAArea23}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAArea24}
                               name = "RAArea24"
                               id = "RAArea24"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAArea23", "#RAArea24")}
                               onChange = {this.handleRAArea24}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAArea25}
                               name = "RAArea25"
                               id = "RAArea25"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAArea24", "#RAArea25")}
                               onChange = {this.handleRAArea25}/>


                             {this.state.isIndicatorEnabled === false ?
                           <span className="tooltip" style={{marginLeft:"3.8%"}}>
                          <img src={indicator} style={{width:"3.2%",height:"3.2%"}} />
                            <label className="tooltiptext tooltiptextLabel" style={{width:"450px",height:"20px"}}>Please enter only alphabet</label>
                         </span>
                         : ""}
                         <br/>
                           </div>

                           <div>
                           <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RATown1}
                               name = "RATown1"
                               id = "RATown1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RATown1", "#RATown1")}
                               onChange = {this.handleRATown1}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RATown2}
                               name = "RATown2"
                               id = "RATown2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RATown1", "#RATown2")}
                               onChange = {this.handleRATown2}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RATown3}
                               name = "RATown3"
                               id = "RATown3"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RATown2", "#RATown3")}
                               onChange = {this.handleRATown3}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RATown4}
                               name = "RATown4"
                               id = "RATown4"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RATown3", "#RATown4")}
                               onChange = {this.handleRATown4}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RATown5}
                               name = "RATown5"
                               id = "RATown5"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RATown4", "#RATown5")}
                               onChange = {this.handleRATown5}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RATown6}
                               name = "RATown6"
                               id = "RATown6"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RATown5", "#RATown6")}
                               onChange = {this.handleRATown6}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RATown7}
                               name = "RATown7"
                               id = "RATown7"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RATown6", "#RATown7")}
                               onChange = {this.handleRATown7}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RATown8}
                               name = "RATown8"
                               id = "RATown8"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RATown7", "#RATown8")}
                               onChange = {this.handleRATown8}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RATown9}
                               name = "RATown9"
                               id = "RATown9"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RATown8", "#RATown9")}
                               onChange = {this.handleRATown9}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RATown10}
                               name = "RATown10"
                               id = "RATown10"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RATown9", "#RATown10")}
                               onChange = {this.handleRATown10}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RATown11}
                               name = "RATown11"
                               id = "RATown11"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RATown10", "#RATown11")}
                               onChange = {this.handleRATown11}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RATown12}
                               name = "RATown12"
                               id = "RATown12"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RATown11", "#RATown12")}
                               onChange = {this.handleRATown12}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RATown13}
                               name = "RATown13"
                               id = "RATown13"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RATown12", "#RATown13")}
                               onChange = {this.handleRATown13}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RATown14}
                               name = "RATown14"
                               id = "RATown14"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RATown13", "#RATown14")}
                               onChange = {this.handleRATown14}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RATown15}
                               name = "RATown15"
                               id = "RATown15"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RATown14", "#RATown15")}
                               onChange = {this.handleRATown15}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RATown16}
                               name = "RATown16"
                               id = "RATown16"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RATown15", "#RATown16")}
                               onChange = {this.handleRATown16}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RATown17}
                               name = "RATown17"
                               id = "RATown17"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RATown16", "#RATown17")}
                               onChange = {this.handleRATown17}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RATown18}
                               name = "RATown18"
                               id = "RATown18"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RATown17", "#RATown18")}
                               onChange = {this.handleRATown18}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RATown19}
                               name = "RATown19"
                               id = "RATown19"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RATown18", "#RATown19")}
                               onChange = {this.handleRATown19}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RATown20}
                               name = "RATown20"
                               id = "RATown20"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RATown19", "#RATown20")}
                               onChange = {this.handleRATown20}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RATown21}
                               name = "RATown21"
                               id = "RATown21"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RATown20", "#RATown21")}
                               onChange = {this.handleRATown21}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RATown22}
                               name = "RATown22"
                               id = "RATown22"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RATown21", "#RATown22")}
                               onChange = {this.handleRATown22}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RATown23}
                               name = "RATown23"
                               id = "RATown23"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RATown22", "#RATown23")}
                               onChange = {this.handleRATown23}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RATown24}
                               name = "RATown24"
                               id = "RATown24"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RATown23", "#RATown24")}
                               onChange = {this.handleRATown24}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RATown25}
                               name = "RATown25"
                               id = "RATown25"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RATown24", "#RATown25")}
                               onChange = {this.handleRATown25}/>
                             {this.state.isIndicatorEnabled === false ?
                           <span className="tooltip" style={{marginLeft:"3.8%"}}>
                          <img src={indicator} style={{width:"3.2%",height:"3.2%"}} />
                            <label className="tooltiptext tooltiptextLabel" style={{width:"450px",height:"20px"}}>Please enter only alphabet</label>
                         </span>
                         : ""}
                          <br/>
                           </div>
  

                         </td>
                      </tr>
                    </tbody>
                    </table>

                    <table cellPadding = "0" cellSpacing = "0"  className = "divState">
                    <tbody>
                        <tr>
                           <td >
                             <label className = "StateId"> State / Union Territory </label>
                          </td>
                          <td >
                             <label className = "PincodeId"> Pincode / Zip code </label>
                          </td>
                       </tr>
                       <tr>
                          <td >
                             <input 
                                 className = "StateValue"
                                 name="RAState"
                                 id = "RAState"
                                 value={this.state.data.RAState}
                                 onChange={event => this.handleRAState(event)}/>
                              
                          </td>
                          <td> 
                          <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAPincode1}
                               name = "RAPincode1"
                               id = "RAPincode1"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAPincode1", "#RAPincode1")}
                               onChange = {this.handleRAPincode1}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAPincode2}
                               name = "RAPincode2"
                               id = "RAPincode2"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAPincode1", "#RAPincode2")}
                               onChange = {this.handleRAPincode2}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAPincode3}
                               name = "RAPincode3"
                               id = "RAPincode3"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAPincode2", "#RAPincode3")}
                               onChange = {this.handleRAPincode3}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAPincode4}
                               name = "RAPincode4"
                               id = "RAPincode4"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAPincode3", "#RAPincode4")}
                               onChange = {this.handleRAPincode4}/>

                            <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAPincode5}
                               name = "RAPincode5"
                               id = "RAPincode5"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAPincode4", "#RAPincode5")}
                               onChange = {this.handleRAPincode5}/> 

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAPincode6}
                               name = "RAPincode6"
                               id = "RAPincode6"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAPincode5", "#RAPincode6")}
                               onChange = {this.handleRAPincode6}/>

                             <input 
                               type="text" 
                               className="Name-control"
                               maxLength = "1"
                               value = {this.state.data.RAPincode7}
                               name = "RAPincode7"
                               id = "RAPincode7"
                               onKeyDown = {event => this.handleBackspaceKey(event, "#RAPincode6", "#RAPincode7")}
                               onChange = {this.handleRAPincode7}/>

                             {this.state.isIndicatorEnabled === false ?
                               <span className="tooltip" style={{marginLeft:"61.5%"}}>
                            <img src={indicator} style={{width:"3.4%",height:"3.4%"}} />
                                <label className="tooltiptext tooltiptextLabel" style={{width:"450px",height:"20px"}}>Please enter as applicable</label>
                            </span>
                            : ""}
                           </td>
                       </tr>
                        
                       
                    </tbody>
                    </table>
                 
                 {/* Fifteenth Component */}
                   
                    <div className = "ColouredLabel">
                    <label  className = "ColouredLabel">&nbsp;&nbsp;15 &nbsp; Douments submitted as Proof of Identity (POI), Proof of Address (POA) and Proof of Date of Birth (POB)</label>
                    {this.state.isIndicatorEnabled === false ?
                    <span className="tooltip" style={{marginLeft:"16.7%"}}>
                          <img src={indicator} style={{width:"2.3%",height:"2.3%", marginLeft : "4.5%"}} />
                            <img src={prooffield} className="tooltiptext" style={{width:"600px",height:"100px"}}  />
                    </span>
                    :""}
                    </div>
                    
                    <label className= "FirstLabel"> I/We have enclosed</label> &nbsp; 
                    <input 
                       type= "text" 
                       className = "CountryInput"
                       name="POI"
                       id = "POI"
                       value={this.state.data.POI}
                       onChange={event => this.handlePOI(event)}/> &nbsp; 
                    <label className="Label_with_no_space"> as proof of identity,</label> &nbsp; 
                     

                    <input 
                       type= "text" 
                       className = "CountryInput"
                       name="POA"
                       id = "POA"
                       value={this.state.data.POA}
                       onChange={event => this.handlePOA(event)}/> 
                       <br/>
                    
                    <label className= "FirstLabel"> as proof of address and</label>&nbsp; 
                     

                    <input 
                        type= "text" 
                        className = "CountryInput"
                        name="POB"
                        id = "POB"
                        value={this.state.data.POB}
                        onChange={event => this.handlePOB(event)}/>&nbsp; 

                    <label className="Label_with_no_space"> as proof of date of birth.</label>
                    
                    <br/>

                     
                    <label className= "FirstLabel"> [Please refer to the instructions (as specified in Rule 114 of I.I.Rules, 1962) for list of mandatory certified documents to be submitted as applicable]</label> <br/>
                    <label className= "FirstLabel"> [Annexure A, Annexure B & Annexure C are to be used wherever applicable]</label> <br/>
                      
                      
                    {/* Sixteenth Component */}

                    <label  className = "ColouredLabel"> &nbsp;&nbsp; 16 </label> 
                    <label className= "Label_with_no_space"> &nbsp; I/We</label> &nbsp;
               
                    <input 
                        type= "text" 
                        className = "CountryInput"
                        name="Applicant"
                        id = "Applicant"
                        value={this.state.data.Applicant}
                        onChange={event => this.handleApplicant(event)}/>
                    <label className= "Declaration2Label">, the applicant, in the capacity of</label> &nbsp;
                    
                    <input 
                        type= "text" 
                        className = "CountryInput"
                        name="Capacity"
                        id = "Capacity"
                        value={this.state.data.Capacity}
                        onChange={event => this.handleCapacity(event)}/> <br/>

                    <label className= "FirstLabel">do hereby declare that what is stated above is true to the best of my/our information and belief.</label>  
                   
                     
                </div>
                <br /><br />

           </div>
           <br />


       
            
      </div>

     </div>

        </div>
    );
  }
}

export default Form1;