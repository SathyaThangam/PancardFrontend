import React, { Component } from 'react';
import "./Form1.css";
import OtpInput from 'react-otp-input';
import axios from "axios";
import $ from 'jquery';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas'
import Modal from "react-responsive-modal";
import page3 from "./panpage3.jpg"
import page4 from "./panpage4.jpg"
import page5 from "./panpage5.jpg"
import page6 from "./panpage6.jpg"
import page7 from "./panpage7.jpg"
import page8 from "./panpage8.jpg"
 

let alldata  ;
class Form1 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      address: ["Name of Office", "Flat / Room / Door / Block No.", "Name of Premises / Building / Village", "Road / Street / Lane / Post Office", "Area / Locality / Taluka / Sub-Division", "Town / City / District"],
      addressTwo: ["Flat / Room / Door / Block No.", "Name of Premises / Building / Village", "Road / Street / Lane / Post Office", "Area / Locality / Taluka / Sub-Division", "Town / City / District"],
      name: ["Last Name / Surname", "First Name", "Middle Name"],
      addressThree: ["Name of Premises / Building / Village", "Road / Street / Lane/Post Office", "Area / Locality / Taluka/ Sub- Division", "Town / City / District"],
      
      isModalEnabled: false,
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
     
    axios.post('http://159.89.165.174:5000/saveData',this.state.data)
     .then(function (response) 
     {
        console.log(response);
     })
    .catch(function (error) {
        console.log(error);
    });
   }
 
   handleInputdata = (otp, name, id) => {
    //  if(name == "phonenumber")
    //  {
    //      this.validatephonenumber();
    //  }
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

 onOpenModal = () => {

   if(this.state.data.NameTitleOne === "")
   {
      let errors = Object.assign({}, this.state.errors);
      $( "#1" ).focus();
      errors.NameTitleOne = '*Please select title as applicable';                         
      this.setState({errors});
   }
   else if(this.state.data.LastName === "")
   { 
      let errors = Object.assign({}, this.state.errors);     
      errors.LastName = '*Fields are required';                         
      this.setState({errors});
      $( "#LastName" ).focus();
   }
   else if( this.state.data.FirstName === "")
   { 
      let errors = Object.assign({}, this.state.errors);     
      errors.FirstName = '*Fields are required';                         
      this.setState({errors});
      $( "#FirstName" ).focus();
   }
   else if(this.state.data.OtherName === "")
   {
       let errors = Object.assign({}, this.state.errors);     
       errors.OtherName = '*Please tick as applicable';                         
       this.setState({errors});
       $( "#OtherName" ).focus();
   }
   else if(this.state.data.NameTitleTwo === "" && this.state.data.OtherName === "Yes")
   {
       let errors = Object.assign({}, this.state.errors);     
       errors.NameTitleTwo = '*Please select title as applicable';                         
       this.setState({errors});
       $( "#7" ).focus();
   }
   else if(this.state.data.OtherName === "Yes" &&  this.state.data.OtherLastName === "" )
   {
       let errors = Object.assign({}, this.state.errors);     
       errors.OtherLastName = '*Fields are required';                         
       this.setState({errors});
       $( "#OtherLastName" ).focus();
   }
   else if(this.state.data.OtherName === "Yes" && this.state.data.OtherFirstName === "" )
   {
       let errors = Object.assign({}, this.state.errors);     
       errors.OtherFirstName = '*Fields are required';                         
       this.setState({errors});
       $( "#OtherFirstName" ).focus();
   }
   else if(this.state.data.Gender === "")
   {
       let errors = Object.assign({}, this.state.errors);     
       errors.Gender = '*Please tick as applicable';                         
       this.setState({errors});
       $( "#11" ).focus();
   }
   else if(this.state.data.Day === "" )
   {
       let errors = Object.assign({}, this.state.errors);     
       errors.Day = '*Fields are required';                         
       this.setState({errors});
       $( "#Day" ).focus();
   }
   else if(this.state.data.Month === "")
   {  
       let errors = Object.assign({}, this.state.errors);     
       errors.Month = '*Fields are required';                         
       this.setState({errors});
       $( "#Month" ).focus();
   }
   else if(this.state.data.Year === "")
   {
       let errors = Object.assign({}, this.state.errors);     
       errors.Year = '*Fields are required';                         
       this.setState({errors});
       $( "#Year" ).focus();
   }
   else if(this.state.data.FatherLastName === "")
   {
       let errors = Object.assign({}, this.state.errors);     
       errors.FatherLastName = '*Fields are required';                         
       this.setState({errors});
       $( "#FatherLastName" ).focus();
   }
   else if(this.state.data.FatherFirstName === "")
   {
       let errors = Object.assign({}, this.state.errors);     
       errors.FatherFirstName = '*Fields are required';                         
       this.setState({errors});
       $( "#FatherFirstName" ).focus();
   }
   else if(this.state.data.ParentName === "")
   {
       let errors = Object.assign({}, this.state.errors);     
       errors.ParentName = '*Please tick as applicable';                         
       this.setState({errors});
       $( "#14" ).focus();
   }
   else if( this.state.data.ParentName === "Mother's name" && this.state.data.MotherLastName === "")
   { 
       let errors = Object.assign({}, this.state.errors);     
       errors.MotherLastName = "*Please enter Mother's name";                         
       this.setState({errors});
       $( "#MotherLastName" ).focus();
   }
   else if(this.state.data.ParentName === "Mother's name" && this.state.data.MotherFirstName === "")
   {
       let errors = Object.assign({}, this.state.errors);     
       errors.MotherFirstName = "*Please enter Mother's name";                         
       this.setState({errors});
       $( "#MotherFirstName" ).focus();
   }
   else if(this.state.data.ResidenceFlat === "")
   {  
       let errors = Object.assign({}, this.state.errors);     
       errors.ResidenceFlat = "*Fields are required";                         
       this.setState({errors});
       $( "#ResidenceFlat" ).focus();
   }
   else if(this.state.data.ResidencePremises === "")
   {  
       let errors = Object.assign({}, this.state.errors);     
       errors.ResidencePremises = "*Fields are required";                         
       this.setState({errors});
       $( "#ResidencePremises" ).focus();
   }
   else if(this.state.data.ResidenceRoad === "")
   {  
       let errors = Object.assign({}, this.state.errors);     
       errors.ResidenceRoad = "*Fields are required";                         
       this.setState({errors});
       $( "#ResidenceRoad" ).focus();
   }
   else if(this.state.data.ResidenceArea === "")
   {  
       let errors = Object.assign({}, this.state.errors);     
       errors.ResidenceArea = "*Fields are required";                         
       this.setState({errors});
       $( "#ResidenceArea" ).focus();
   }
   else if(this.state.data.ResidenceTown === "")
   {  
       let errors = Object.assign({}, this.state.errors);     
       errors.ResidenceTown = "*Fields are required";                         
       this.setState({errors});
       $( "#ResidenceTown" ).focus();
   }
   else if(this.state.data.ResidenceState === "")
   {  
       let errors = Object.assign({}, this.state.errors);     
       errors.ResidenceState = "*Fields are required";                         
       this.setState({errors});
       $( "#ResidenceState" ).focus();
   }
   else if(this.state.data.ResidencePincode === "")
   {  
       let errors = Object.assign({}, this.state.errors);     
       errors.ResidencePincode = "*Fields are required";                         
       this.setState({errors});
       $( "#ResidencePincode" ).focus();
   }
   else if(this.state.data.ResidenceCountry === "")
   {  
       let errors = Object.assign({}, this.state.errors);     
       errors.ResidenceCountry = "*Fields are required";                         
       this.setState({errors});
       $( "#ResidenceCountry" ).focus();
   }
   else if(this.state.data.Communication === "")
   {
       let errors = Object.assign({}, this.state.errors);     
       errors.Communication = "*Please tick as applicable";                         
       this.setState({errors});
       $( "#16" ).focus();
   }
   else if(this.state.data.OfficeName === ""  && this.state.data.Communication === "Office")
   {
       let errors = Object.assign({}, this.state.errors);     
       errors.OfficeName = "*Fields are required";                         
       this.setState({errors});
       $( "#OfficeName" ).focus();
   }
   else if(this.state.data.OfficeFlat === "" && this.state.data.Communication === "Office")
   {
       let errors = Object.assign({}, this.state.errors);     
       errors.OfficeFlat = "*Fields are required";                         
       this.setState({errors});
       $( "#OfficeFlat" ).focus();
   }
   else if(this.state.data.OfficePremises === "" && this.state.data.Communication === "Office")
   {
       let errors = Object.assign({}, this.state.errors);     
       errors.OfficePremises = "*Fields are required";                         
       this.setState({errors});
       $( "#OfficePremises" ).focus();
   }
   else if(this.state.data.OfficeRoad === "" && this.state.data.Communication === "Office")
   {
       let errors = Object.assign({}, this.state.errors);     
       errors.OfficeRoad = "*Fields are required";                         
       this.setState({errors});
       $( "#OfficeRoad" ).focus();
   }
   else if(this.state.data.OfficeArea === "" && this.state.data.Communication === "Office")
   {
       let errors = Object.assign({}, this.state.errors);     
       errors.OfficeArea = "*Fields are required";                         
       this.setState({errors});
       $( "#OfficeArea" ).focus();
   }
   else if(this.state.data.OfficeTown === "" && this.state.data.Communication === "Office")
   {
       let errors = Object.assign({}, this.state.errors);     
       errors.OfficeTown = "*Fields are required";                         
       this.setState({errors});
       $( "#OfficeTown" ).focus();
   }
   else if(this.state.data.OfficeState === "" && this.state.data.Communication === "Office")
   {
       let errors = Object.assign({}, this.state.errors);     
       errors.OfficeState = "*Fields are required";                         
       this.setState({errors});
       $( "#OfficeState" ).focus();
   }
   else if(this.state.data.OfficePincode === "" && this.state.data.Communication === "Office")
   {
       let errors = Object.assign({}, this.state.errors);     
       errors.OfficePincode = "*Fields are required";                         
       this.setState({errors});
       $( "#OfficePincode" ).focus();
   }
   else if(this.state.data.OfficeCountry === "" && this.state.data.Communication === "Office")
   {
       let errors = Object.assign({}, this.state.errors);     
       errors.OfficeCountry = "*Fields are required";                         
       this.setState({errors});
       $( "#OfficeCountry" ).focus();
   }
   else if(this.state.data.CountryCode === "" )
   {
       let errors = Object.assign({}, this.state.errors);     
       errors.CountryCode = "*Fields are required";                         
       this.setState({errors});
       $( "#CountryCode" ).focus();
   }
   else if(this.state.data.StdCode === "" )
   {
       let errors = Object.assign({}, this.state.errors);     
       errors.StdCode = "*Fields are required";                         
       this.setState({errors});
       $( "#StdCode" ).focus();
   }
   else if(this.state.data.PhoneNumber === "" )
   {
       let errors = Object.assign({}, this.state.errors);     
       errors.PhoneNumber = "*Fields are required";                         
       this.setState({errors});
       $( "#PhoneNumber" ).focus();
   }
   else if(this.state.data.Email === "" )
   {
       let errors = Object.assign({}, this.state.errors);     
       errors.Email = "*Fields are required";                         
       this.setState({errors});
       $( "#Email" ).focus();
   }
   else if(this.state.data.Status === "")
   {
       let errors = Object.assign({}, this.state.errors);     
       errors.Status = "*Please select status as applicable";                         
       this.setState({errors});
       $( "#22" ).focus();
   }
   else if((this.state.data.Status === "Company"  && this.state.data.RegistrationNumber === ""))
   {
       let errors = Object.assign({}, this.state.errors);     
       errors.RegistrationNumber = "*Registration number is required for Company";                         
       this.setState({errors});
       $( "#RegistrationNumber" ).focus();
   }
   else if(this.state.data.Status === "Limited Liability Partnership" && this.state.data.RegistrationNumber === "")
   {
       let errors = Object.assign({}, this.state.errors);     
       errors.RegistrationNumber = "*Registration number is required for Limited Liability Partnership";                         
       this.setState({errors});
       $( "#RegistrationNumber" ).focus();
   }
   else if(this.state.data.AadhaarNumber === "" && this.state.data.EnrolmentId === "")
   {
       let errors = Object.assign({}, this.state.errors);     
       errors.AadhaarNumber = "*Either Aadhaar number or Enrolment Id is required";                         
       this.setState({errors});
       $( "#AadhaarNumber" ).focus();
   }
   else if(this.state.data.AadhaarLastName === "" )
   {
       let errors = Object.assign({}, this.state.errors);     
       errors.AadhaarLastName = "*Fields are required";                         
       this.setState({errors});
       $( "#AadhaarLastName" ).focus();
   }
   else if(this.state.data.Salary === "" && this.state.data.CapitalGains === "" &&
   this.state.data.IncomeBusiness === "" && this.state.data.IncomeOtherSource === "" &&
   this.state.data.IncomeFromHouse === "" && this.state.data.NoIncome === "")
   {
       let errors = Object.assign({}, this.state.errors);     
       errors.Income = "*Please select the Source of Income";                         
       this.setState({errors});
       $( "#33" ).focus();
   }
   else if(this.state.data.IncomeBusiness !== "" && this.state.data.BusinessCode1 === "" &&
      this.state.data.BusinessCode2 === "")
   {
       let errors = Object.assign({}, this.state.errors);     
       errors.BusinessCode1 = "*Business / Profession code is required for Income from Business / Profession";                         
       this.setState({errors});
       $( "#BusinessCodeDiv" ).focus();
   }
   else if(this.state.data.NameTitleThree === "")
   {
       let errors = Object.assign({}, this.state.errors);     
       errors.NameTitleThree = "*Please select title as applicable";                         
       this.setState({errors});
       $( "#36" ).focus();
   }
   else if(this.state.data.RALastName === "" )
   {
       let errors = Object.assign({}, this.state.errors);     
       errors.RALastName = "*Fields are required";                         
       this.setState({errors});
       $( "#RALastName" ).focus();
   }
   else if(this.state.data.RAFirstName === "")
   {
       let errors = Object.assign({}, this.state.errors);     
       errors.RAFirstName = "*Fields are required";                         
       this.setState({errors});
       $( "#RAFirstName" ).focus();
   }
   else if(this.state.data.RAFlat === "")
   {  
       let errors = Object.assign({}, this.state.errors);     
       errors.RAFlat = "*Fields are required";                         
       this.setState({errors});
       $( "#RAFlat" ).focus();
   }
   else if(this.state.data.RAPremises === "")
   {  
       let errors = Object.assign({}, this.state.errors);     
       errors.RAPremises = "*Fields are required";                         
       this.setState({errors});
       $( "#RAPremises" ).focus();
   }
   else if(this.state.data.RARoad === "")
   {  
       let errors = Object.assign({}, this.state.errors);     
       errors.RARoad = "*Fields are required";                         
       this.setState({errors});
       $( "#RARoad" ).focus();
   } 
   else if(this.state.data.RAArea === "")
   {  
       let errors = Object.assign({}, this.state.errors);     
       errors.RAArea = "*Fields are required";                         
       this.setState({errors});
       $( "#RAArea" ).focus();
   }
   else if(this.state.data.RATown === "")
   {  
       let errors = Object.assign({}, this.state.errors);     
       errors.RATown = "*Fields are required";                         
       this.setState({errors});
       $( "#RATown" ).focus();
   }
   else if(this.state.data.RAState === "")
   {  
       let errors = Object.assign({}, this.state.errors);     
       errors.RAState = "*Fields are required";                         
       this.setState({errors});
       $( "#RAState" ).focus();
   }
   else if(this.state.data.RAPincode === "")
   {  
       let errors = Object.assign({}, this.state.errors);     
       errors.RAPincode = "*Fields are required";                         
       this.setState({errors});
       $( "#RAPincode" ).focus();
   }
   else if(this.state.data.POI === "")
   {  
       let errors = Object.assign({}, this.state.errors);     
       errors.POI = "*Fields are required";                         
       this.setState({errors});
       $( "#POI" ).focus();
   }
   else if(this.state.data.POA === "")
   {  
       let errors = Object.assign({}, this.state.errors);     
       errors.POA = "*Fields are required";                         
       this.setState({errors});
       $( "#POA" ).focus();
   }
   else if(this.state.data.POB === "")
   {  
       let errors = Object.assign({}, this.state.errors);     
       errors.POB = "*Fields are required";                         
       this.setState({errors});
       $( "#POB" ).focus();
   }
   else if(this.state.data.Applicant === "")
   {  
       let errors = Object.assign({}, this.state.errors);     
       errors.Applicant = "*Fields are required";                         
       this.setState({errors});
       $( "#Applicant" ).focus();
   }
   else if(this.state.data.Capacity === "")
   {
       let errors = Object.assign({}, this.state.errors);     
       errors.Capacity = "*Fields are required";                         
       this.setState({errors});
       $( "#Capacity" ).focus();
   }
   else
   {
     this.setState({ open: true });
   }

   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
 };

 onCloseModal = () => {
   this.setState({ open: false });
   this.setState({check:0});
 };  

   

  componentDidMount() {
      if(alldata != null){
        for(let i=0; i<=14 ;i++){
            let valdata = this.state.checkarray[i];
           let value = alldata[`${valdata}`];
           if(value != ""){
               $(`#${value}`).prop('checked', true);
           }
        }
      }
  
   $("input:checkbox").click(function () {
     if ($(this).is(":checked")) {
       var group = "input:checkbox[name='" + $(this).attr("name") + "']";
       $(group).prop("checked", false);
       $(this).prop("checked", true);
     }
     else 
     {
        $(this).prop("checked", false);
     }
   });

   $('#5').change(function(){
    if(this.checked) {
       $('#OtherNameDiv').show();
    }
   
   });

   $('#6').change(function(){
      if(this.checked) {
        $('#OtherNameDiv').hide();
      }
     });
   
     if(this.state.errors.FirstName === "" && this.state.errors.LastName === "" 
      && this.state.errors.MiddleName === "" && this.state.errors.AbbreviationOne === "" && 
      this.state.errors.AbbreviationTwo === "" && this.state.errors.FatherFirstName === "" &&
      this.state.errors.FatherLastName === "" && this.state.errors.FatherMiddleName === "" && 
      this.state.errors.MotherFirstName === "" && this.state.errors.MotherLastName === "" && 
      this.state.errors.MotherMiddleName === "" && this.state.errors.OtherFirstName === "" &&
      this.state.errors.OtherLastName === "" && this.state.errors.OtherMiddleName === "" && 
      this.state.errors.Day === "" && this.state.errors.Month === "" && 
      this.state.errors.Year === "" && this.state.errors.ResidenceFlat === "" &&
      this.state.errors.ResidencePremises === "" && this.state.errors.ResidenceRoad === ""&&
      this.state.errors.ResidenceState === "" && this.state.errors.ResidenceTown === "" && 
      this.state.errors.ResidenceArea === "" && this.state.errors.ResidenceCountry === "" && 
      this.state.errors.ResidencePincode === "" && this.state.errors.OfficeName === "" &&
      this.state.errors.OfficeFlat === "" && this.state.errors.OfficePremises === "" && 
      this.state.errors.OfficeRoad === "" && this.state.errors.OfficeArea === "" && 
      this.state.errors.OfficeTown === "" && this.state.errors.OfficeState === "" &&
      this.state.errors.OfficePincode === "" && this.state.errors.OfficeCountry === "" &&
      this.state.errors.CountryCode === "" && this.state.errors.StdCode === "" && 
      this.state.errors.PhoneNumber === "" && this.state.errors.Email === "" &&
      this.state.errors.RegistrationNumber === "" && this.state.errors.AadhaarNumber === "" && 
      this.state.errors.EnrolmentId === "" && this.state.errors.AadhaarFirstName === "" &&
      this.state.errors.AadhaarLastName === "" && this.state.errors.AadhaarMiddleName === "" &&
      this.state.errors.BusinessCode1 === "" && this.state.errors.BusinessCode2 === "" && 
      this.state.errors.RAFirstName === "" && this.state.errors.RALastName === "" && 
      this.state.errors.RAMiddleName === "" && this.state.errors.RAFlat === "" && 
      this.state.errors.RAPremises === "" && this.state.errors.RARoad === "" && 
      this.state.errors.RAArea === "" &&  this.state.errors.RATown === "" && 
      this.state.errors.RAState === "" && this.state.errors.RAPincode === "" && 
      this.state.errors.POI === "" && this.state.errors.POA === "" && 
      this.state.errors.POB === "" && this.state.errors.Applicant === "" && 
      this.state.errors.Capacity === "")
     {
         let val = this.state.isModalEnabled;
         val = true;
         this.setState({val});
     }
 
 }


  handleReset = () => {
        localStorage.setItem('localdata', JSON.stringify({}));
        localStorage.setItem('localerror', JSON.stringify({}));
  }

 savepdf = () => {
   this.handleReset();
   console.log("savepdf working...", this.state.data)
   axios.post('http://159.89.165.174:5000/saveData', 
       this.state.data
   )
       .then(function (response) {
           console.log(response);
       })
       .catch(function (error) {
           console.log(error);
       });

   const input = document.getElementById('Form1');
   html2canvas(input)
     .then((canvas) => {
         const imgData = canvas.toDataURL('image/png');
         const pdf = new jsPDF();
         pdf.addImage(imgData, 'JPEG', 0, 5, 215, 290);
         // pdf.output('dataurlnewwindow');
         pdf.save("download.pdf");
     });
 }
 
 sendmsg = () =>{
    let otpcheck ="" ;
    axios.get('http://159.89.165.174:5000/sendmsg')
       .then(async (response) => {
           await this.setState({otpverify:response.data})
       })
       .catch(function (error) {
           console.log(error);
       });
       console.log("otp checck",this.state.otpverify)
       console.log("optnumber check", this.state.data.otpnumber)
       if(this.state.otpverify == this.state.data.otpnumber)
       {
         this.setState({secondcheck:1});
         alert("Valid")
       }
       else{
         alert("Please verifyotp again")
       }
     }
   
   sendno = ( )=> {
     this.setState({check:1});
     this.state.number.phonenumber = this.state.data.phonenumber;
     const dataa =  this.state.number.phonenumber;
     this.setState({dataa})
     axios.post('http://159.89.165.174:5000/sendnumber', 
     this.state.number
     )
         .then(function (response) {
             console.log(response);
         })
         .catch(function (error) {
             console.log(error);
         });
   
   }
   
   getdata =() =>{
       axios.get('http://159.89.165.174:5000/viewData')
     .then((response) => {
         console.log("testing" , response.data)
   
     })
     .catch(function (error) {
         console.log(error);
     });
   }
   
  
 


  handleNameTitleOneCheck = (e,name) =>  {

    for (var i = 1;i <= 4; i++)
    {
        document.getElementById(i).checked = false;
    }
    document.getElementById(e.target.id).checked = true;
    let errors = Object.assign({}, this.state.errors);     
    errors.NameTitleOne = "";                         
    this.setState({errors});
  
    const check = this.state.data;
    check[name] = e.target.id;
    this.setState({ check })

    

    localStorage.setItem('localdata', JSON.stringify(this.state.data));
    localStorage.setItem('localerror', JSON.stringify(this.state.errors));
    
  }

  handleOtherNameCheck = (e,name) =>  {

    for (var i = 5;i <= 6; i++)
    {
        document.getElementById(i).checked = false;
    }
    document.getElementById(e.target.id).checked = true;
     
    let errors = Object.assign({}, this.state.errors);     
    errors.OtherName = "";                         
    this.setState({errors});

    const check = this.state.data;
    check[name] = e.target.id;
    this.setState({ check })

    if(e.target.id === "6")
    {
        let data = Object.assign({}, this.state.data);     
        data.NameTitleTwo = "";                         
        this.setState({data});
 
        let data1 = Object.assign({}, this.state.data);     
        data1.OtherLastName = "";                         
        this.setState({data1});

        let data2 = Object.assign({}, this.state.data);     
        data2.OtherFirstName = "";                         
        this.setState({data2});

        let data3 = Object.assign({}, this.state.data);     
        data3.OtherMiddleName = "";                         
        this.setState({data3});

        let errors = Object.assign({}, this.state.errors);     
        errors.NameTitleTwo = "";                         
        this.setState({errors});
 
        let errors1 = Object.assign({}, this.state.errors);     
        errors1.OtherLastName = "";                         
        this.setState({errors1});

        let errors2 = Object.assign({}, this.state.errors);     
        errors2.OtherFirstName = "";                         
        this.setState({errors2});

        let errors3 = Object.assign({}, this.state.errors);     
        errors3.OtherMiddleName = "";                         
        this.setState({errors3});
        errors.OtherName = "";
    }
    errors.OtherName = "";

    localStorage.setItem('localdata', JSON.stringify(this.state.data));
    localStorage.setItem('localerror', JSON.stringify(this.state.errors));
    
  }


  handleNameTitleTwoCheck = (e,name) =>  {

    for (var i = 7;i <= 10; i++)
    {
        document.getElementById(i).checked = false;
    }
    document.getElementById(e.target.id).checked = true;
    
    let errors = Object.assign({}, this.state.errors);     
    errors.NameTitleTwo = "";                         
    this.setState({errors});
    
  
    const check = this.state.data;
    check[name] = e.target.id;
    this.setState({ check })
 
    localStorage.setItem('localdata', JSON.stringify(this.state.data));
    localStorage.setItem('localerror', JSON.stringify(this.state.errors));
    
  }


  handleGenderCheck = (e,name) =>  {

    for (var i = 11;i <= 13; i++)
    {
        document.getElementById(i).checked = false;
    }
    document.getElementById(e.target.id).checked = true;    
    
    let errors = Object.assign({}, this.state.errors);     
    errors.Gender = "";                         
    this.setState({errors});
  
    const check = this.state.data;
    check[name] = e.target.id;
    this.setState({ check })
 
    localStorage.setItem('localdata', JSON.stringify(this.state.data));
    localStorage.setItem('localerror', JSON.stringify(this.state.errors));
    
  }



  handleParentNameCheck = (e,name) =>  {

    for (var i = 14;i <= 15; i++)
    {
        document.getElementById(i).checked = false;
    }
    document.getElementById(e.target.id).checked = true;
     
    let errors = Object.assign({}, this.state.errors);     
    errors.ParentName = "";                         
    this.setState({errors});
  
    const check = this.state.data;
    check[name] = e.target.id;
    this.setState({ check })

    if(e.target.id === "14")
    {
        if(this.state.errors.MotherLastName === "*Please enter Mother's name")
        {
            
            let errors = Object.assign({}, this.state.errors);     
            errors.MotherLastName = "";                         
            this.setState({errors});
        }

        if(this.state.errors.MotherFirstName === "*Please enter Mother's name")
        {
            let errors = Object.assign({}, this.state.errors);     
            errors.MotherFirstName = "";                         
            this.setState({errors});
        }
    }

    localStorage.setItem('localdata', JSON.stringify(this.state.data));
    localStorage.setItem('localerror', JSON.stringify(this.state.errors));
    
  }

  handleCommunicationCheck = (e,name) =>  {

    for (var i = 16;i <= 17; i++)
    {
        document.getElementById(i).checked = false;
    }
    document.getElementById(e.target.id).checked = true;
    
    let errors = Object.assign({}, this.state.errors);     
    errors.Communication = "";                         
    this.setState({errors});
  
    const check = this.state.data;
    check[name] = e.target.id;
    this.setState({ check })

    if(e.target.id === "17")
    {
       this.state.officeEnabled = true;
       let val = this.state.officeEnabled;
       this.setState({val})

       if(this.state.data.OfficeName === "" || ((isNaN(this.state.data.OfficeName) === false) 
       && (this.state.data.OfficeName.match(/^[ ]*$/))))
       { 
            this.setState(prevState => ({
                errors: {
                    ...prevState.errors,
                    OfficeName: "*Please enter your Office's Name"
                }
            }))
            this.state.isModalEnabled =  false;
       }

       if(this.state.data.OfficeFlat === "" || ((isNaN(this.state.data.OfficeFlat) === false) 
       && (this.state.data.OfficeFlat.match(/^[ ]*$/))))
       {     
           this.setState(prevState => ({
            errors: {
                ...prevState.errors,
                OfficeFlat : "*Please enter your Office Flat / Room / Door / Block No."
            }
           }))       
           this.state.isModalEnabled =  false;
       }

       if(this.state.data.OfficePremises === "" || ((isNaN(this.state.data.OfficePremises) === false) 
       && (this.state.data.OfficePremises.match(/^[ ]*$/))))
       {     
           this.setState(prevState => ({
            errors: {
                ...prevState.errors,
                OfficePremises : "*Please enter your Office Premises / Building / Village"
            }
          }))
           this.state.isModalEnabled =  false;
       }
    
       if(this.state.data.OfficeRoad === "" || ((isNaN(this.state.data.OfficeRoad) === false) 
       && (this.state.data.OfficeRoad.match(/^[ ]*$/))))
       { 
           this.setState(prevState => ({
            errors: {
                ...prevState.errors,
                OfficeRoad : "*Please enter your Office Road / Street / Lane / Post Office"
            }
           }))
           this.state.isModalEnabled =  false;
       }
     
       if(this.state.data.OfficeArea === "" || (isNaN(this.state.data.OfficeArea) === false))
       {  
           this.setState(prevState => ({
            errors: {
                ...prevState.errors,
                OfficeArea : "*Please enter your Office Area / Locality / Taluka / Sub-division"
            }
           }))
           this.state.isModalEnabled =  false;
       }

       if(this.state.data.OfficeTown === "" || (isNaN(this.state.data.OfficeTown) === false))
       {   
           this.setState(prevState => ({
            errors: {
                ...prevState.errors,
                OfficeTown : "*Please enter your Office Town / City / District"
            }
           }))
           this.state.isModalEnabled =  false;
       }

       if(this.state.data.OfficeState === "" || (isNaN(this.state.data.OfficeState) === false))
       {  
           this.setState(prevState => ({
            errors: {
                ...prevState.errors,
                OfficeState : "*Please enter your Office State"
            }
           }))
           let val = this.state.isModalEnabled;
           val = false;
           this.setState({val});
       }

       if(this.state.data.OfficePincode === "" || (this.state.data.OfficePincode.match(/^[ ]*$/)))
       {   
           this.setState(prevState => ({
            errors: {
                ...prevState.errors,
                OfficePincode : "*Please enter your Office Pincode"
            }
           }))
           this.state.isModalEnabled =  false;
       }
      
       if(this.state.data.OfficeCountry === "" || (isNaN(this.state.data.OfficeCountry) === false))
       {  
           this.setState(prevState => ({
            errors: {
                ...prevState.errors,
                OfficeCountry : "*Please enter your OfficeCountry"
            }
           }))
           this.state.isModalEnabled =  false;
       }
        
    }
    else
    {
       this.state.officeEnabled = false;
       let val = this.state.officeEnabled;
       this.setState({val})

       if(this.state.errors.OfficeName === "*Please enter your Office's Name" )
       { 
           this.setState(prevState => ({
            errors: {
                ...prevState.errors,
                OfficeName : ""
            }
          }))
       }

       if(this.state.errors.OfficeFlat === "*Please enter your Office Flat / Room / Door / Block No.")
       { 
           this.setState(prevState => ({
            errors: {
                ...prevState.errors,
                OfficeFlat : ""
            }
          }))
       }

       if(this.state.errors.OfficePremises === "*Please enter your Office Premises / Building / Village")
       { 
           this.setState(prevState => ({
            errors: {
                ...prevState.errors,
                OfficePremises : ""
            }
          }))
       }

       if(this.state.errors.OfficeRoad === "*Please enter your Office Road / Street / Lane / Post Office")
       {
           this.setState(prevState => ({
            errors: {
                ...prevState.errors,
                OfficeRoad : ""
            }
          }))
       }

       if(this.state.errors.OfficeArea === "*Please enter your Office Area / Locality / Taluka / Sub-division")
       {
           this.setState(prevState => ({
            errors: {
                ...prevState.errors,
                OfficeArea : ""
            }
          }))
       }
        
       if(this.state.errors.OfficeTown === "*Please enter your Office Town / City / District")
       {
           this.setState(prevState => ({
            errors: {
                ...prevState.errors,
                OfficeTown : ""
            }
           }))
       }

       if(this.state.errors.OfficeState === "*Please enter your Office State")
       {
           this.setState(prevState => ({
            errors: {
                ...prevState.errors,
                OfficeState : ""
            }
           })) 
       }

       if(this.state.errors.OfficePincode === "*Please enter your Office Pincode")
       {
           this.setState(prevState => ({
            errors: {
                ...prevState.errors,
                OfficePincode : ""
            }
          }))
       }

       if(this.state.errors.OfficeCountry === "*Please enter your OfficeCountry")
       {
           this.setState(prevState => ({
            errors: {
                ...prevState.errors,
                OfficeCountry : ""
            }
          }))
       }
    }

    localStorage.setItem('localdata', JSON.stringify(this.state.data));
    localStorage.setItem('localerror', JSON.stringify(this.state.errors));

    
  }

  handleNameTitleThreeCheck = (e,name) =>  {

    for (var i = 18;i <= 21; i++)
    {
        document.getElementById(i).checked = false;
    }
    document.getElementById(e.target.id).checked = true;
    let errors = Object.assign({}, this.state.errors);     
    errors.NameTitleThree = "";                         
    this.setState({errors});
  
    const check = this.state.data;
    check[name] = e.target.id;
    this.setState({ check })

    localStorage.setItem('localdata', JSON.stringify(this.state.data));
    localStorage.setItem('localerror', JSON.stringify(this.state.errors));
    
  }


  handleStatusCheck = (e,name) =>  {

    for (var i = 22;i <= 32; i++)
    {
        document.getElementById(i).checked = false;
    }
    document.getElementById(e.target.id).checked = true;
    let errors = Object.assign({}, this.state.errors);     
    errors.Status = "";                         
    this.setState({errors});
    
    const check = this.state.data;
    check[name] = e.target.id;
    this.setState({ check })
 
    localStorage.setItem('localdata', JSON.stringify(this.state.data));
    localStorage.setItem('localerror', JSON.stringify(this.state.errors));
    
  }


  handleSalaryCheck = (e,name) =>  {

    
    if(document.getElementsByTagName("Salary").checked === false)
    {
        document.getElementsByTagName("Salary").checked = true; 
        let data = Object.assign({}, this.state.data);     
        data.Salary = "";                         
        this.setState({data});

    }
    else 
    {
        document.getElementsByTagName("Salary").checked = false;
        const check = this.state.data;
        check[name] = e.target.id;
        this.setState({ check });

        if(!(this.state.data.Salary === "" && this.state.data.CapitalGains === "" &&
        this.state.data.IncomeBusiness === "" && this.state.data.IncomeOtherSource === "" &&
        this.state.data.IncomeFromHouse === "" && this.state.data.NoIncome === ""))
        {
           let errors = Object.assign({}, this.state.errors);     
           errors.Income = "";                         
           this.setState({errors});
        }
        
    }
 
    localStorage.setItem('localdata', JSON.stringify(this.state.data));
    localStorage.setItem('localerror', JSON.stringify(this.state.errors));
    
  }


  handleCapitalGainsCheck = (e,name) =>  {

    if(document.getElementsByTagName("CapitalGains").checked === false)
    {
        document.getElementsByTagName("CapitalGains").checked = true;

        let data = Object.assign({}, this.state.data);     
        data.CapitalGains = "";                         
        this.setState({data});
    }
    else 
    {
        document.getElementsByTagName("CapitalGains").checked = false;
        const check = this.state.data;
        check[name] = e.target.id;
        this.setState({ check });

        if(!(this.state.data.Salary === "" && this.state.data.CapitalGains === "" &&
        this.state.data.IncomeBusiness === "" && this.state.data.IncomeOtherSource === "" &&
        this.state.data.IncomeFromHouse === "" && this.state.data.NoIncome === ""))
        {
           let errors = Object.assign({}, this.state.errors);     
           errors.Income = "";                         
           this.setState({errors});
        }
        
    }
    localStorage.setItem('localdata', JSON.stringify(this.state.data));
    localStorage.setItem('localerror', JSON.stringify(this.state.errors));
    
  }



  handleIncomeBusinessCheck = (e,name) =>  {

    if(document.getElementsByTagName("IncomeBusiness").checked === false)
    {
        document.getElementsByTagName("IncomeBusiness").checked = true;
    
        let data = Object.assign({}, this.state.data);     
        data.IncomeBusiness = "";                         
        this.setState({data});

        let data1 = Object.assign({}, this.state.data);     
        data1.BusinessCode1 = "";                         
        this.setState({data1});

        let data2 = Object.assign({}, this.state.data);     
        data2.BusinessCode2 = "";                         
        this.setState({data2});

        let errors = Object.assign({}, this.state.errors);     
        errors.BusinessCode1 = "";                         
        this.setState({errors});
 
        let errors1 = Object.assign({}, this.state.errors);     
        errors1.BusinessCode2 = "";                         
        this.setState({errors1});

 
    }
    else 
    {
        document.getElementsByTagName("IncomeBusiness").checked = false;
        const check = this.state.data;
        check[name] = e.target.id;
        this.setState({ check });  

        if(!(this.state.data.Salary === "" && this.state.data.CapitalGains === "" &&
        this.state.data.IncomeBusiness === "" && this.state.data.IncomeOtherSource === "" &&
        this.state.data.IncomeFromHouse === "" && this.state.data.NoIncome === ""))
        {
           let errors = Object.assign({}, this.state.errors);     
           errors.Income = "";                         
           this.setState({errors});
        }
    }

    if(e.target.id === "35")
    {
       let val = !this.state.isEnabled;
       this.setState({isEnabled : val});
    }
    else {
       let val = false;
       this.setState({isEnabled : val});

       
    }

    localStorage.setItem('localdata', JSON.stringify(this.state.data));
    localStorage.setItem('localerror', JSON.stringify(this.state.errors));
    
  }


  handleIncomeOtherSourceCheck = (e,name) =>  {

    if(document.getElementsByTagName("IncomeOtherSource").checked === false)
    {
        document.getElementsByTagName("IncomeOtherSource").checked = true;
        
        let data = Object.assign({}, this.state.data);     
        data.IncomeOtherSource = "";                         
        this.setState({data});
    }
    else 
    {
        document.getElementsByTagName("IncomeOtherSource").checked = false;
        const check = this.state.data;
        check[name] = e.target.id;
        this.setState({ check });

        if(!(this.state.data.Salary === "" && this.state.data.CapitalGains === "" &&
        this.state.data.IncomeBusiness === "" && this.state.data.IncomeOtherSource === "" &&
        this.state.data.IncomeFromHouse === "" && this.state.data.NoIncome === ""))
        {
           let errors = Object.assign({}, this.state.errors);     
           errors.Income = "";                         
           this.setState({errors});   
        }
        
    }
    localStorage.setItem('localdata', JSON.stringify(this.state.data));
    localStorage.setItem('localerror', JSON.stringify(this.state.errors));
    
  }

  handleIncomeFromHouseCheck = (e,name) =>  {

    if(document.getElementsByTagName("IncomeFromHouse").checked === false)
    {
        document.getElementsByTagName("IncomeFromHouse").checked = true;

        let data = Object.assign({}, this.state.data);     
        data.IncomeFromHouse = "";                         
        this.setState({data});
    }
    else 
    {
        document.getElementsByTagName("IncomeFromHouse").checked = false;
        const check = this.state.data;
        check[name] = e.target.id;
        this.setState({ check });

        if(!(this.state.data.Salary === "" && this.state.data.CapitalGains === "" &&
        this.state.data.IncomeBusiness === "" && this.state.data.IncomeOtherSource === "" &&
        this.state.data.IncomeFromHouse === "" && this.state.data.NoIncome === ""))
        {
           let errors = Object.assign({}, this.state.errors);     
           errors.Income = "";                         
           this.setState({errors});
        }
        
    }
    localStorage.setItem('localdata', JSON.stringify(this.state.data));
    localStorage.setItem('localerror', JSON.stringify(this.state.errors));
    
  }


  handleNoIncomeCheck = (e,name) =>  {

    

    if(e.target.id === "38")
    {
        for (var i = 33;i <= 37; i++)
        {
           document.getElementById(i).checked = false;
        }

       let val = !this.state.isEnabledCheck;
       this.setState({isEnabledCheck : val});

       let vall = false;
       this.setState({isEnabled : vall});

       let data = Object.assign({}, this.state.data);     
       data.IncomeBusiness = "";                         
       this.setState({data});
 
       let data1 = Object.assign({}, this.state.data);     
       data1.BusinessCode1 = "";                         
       this.setState({data1});
 
       let data2 = Object.assign({}, this.state.data);     
       data2.BusinessCode2 = "";                         
       this.setState({data2});

       let errors = Object.assign({}, this.state.errors);     
       errors.BusinessCode1 = "";                         
       this.setState({errors});
 
       let errors1 = Object.assign({}, this.state.errors);     
       errors1.BusinessCode2 = "";                         
       this.setState({errors1});

    }
    else {
       let val = false;
       this.setState({isEnabledCheck : val});
    }

    if(document.getElementsByTagName("NoIncome").checked === false)
    {
        document.getElementsByTagName("NoIncome").checked = true;
        let data = Object.assign({}, this.state.data);     
        data.NoIncome = "";                         
        this.setState({data});
    }
    else 
    {
        document.getElementsByTagName("NoIncome").checked = false;
        const check = this.state.data;
        check[name] = e.target.id;
        this.setState({ check });

        if(!(this.state.data.Salary === "" && this.state.data.CapitalGains === "" &&
        this.state.data.IncomeBusiness === "" && this.state.data.IncomeOtherSource === "" &&
        this.state.data.IncomeFromHouse === "" && this.state.data.NoIncome === ""))
        {
           
           let errors = Object.assign({}, this.state.errors);     
           errors.Income = "";                         
           this.setState({errors});
        }
        
    }
    localStorage.setItem('localdata', JSON.stringify(this.state.data));
    localStorage.setItem('localerror', JSON.stringify(this.state.errors));
    
  }




  async validateLastName(event) {
  
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.LastName = "";                         
   this.setState({errors});
   
 
   if(this.state.data.LastName === "" || (isNaN(this.state.data.LastName) === false))
   { 
       let errors = Object.assign({}, this.state.errors);     
       errors.LastName = "*Please enter your LastName";                         
       this.setState({errors});
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.LastName !== "undefined") {
       if (!this.state.data.LastName.match(/^[a-zA-Z ]*$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.LastName = "*Please enter alphabet characters only.";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
   }
    
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
  }

  async validateFirstName(event) {
 
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.FirstName = "";                         
   this.setState({errors});
 
   if(this.state.data.FirstName === "" || (isNaN(this.state.data.FirstName) === false))
   { 
       let errors = Object.assign({}, this.state.errors);     
       errors.FirstName = "*Please enter your Firstname";                         
       this.setState({errors});
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.FirstName !== "undefined") {
       if (!this.state.data.FirstName.match(/^[a-zA-Z ]*$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.FirstName = "*Please enter alphabet characters only.";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
   }
   
   
    
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
   
}

async validateMiddleName(event) {
         
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.MiddleName = "";                         
   this.setState({errors});
 
   if (typeof  this.state.data.MiddleName !== "undefined") {
       if (!this.state.data.MiddleName.match(/^[a-zA-Z ]*$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.MiddleName = "*Please enter alphabet characters only.";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
   }

   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
   
}

async validateAbbreviationOne(event) {
         
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.AbbreviationOne = "";                         
   this.setState({errors});
   
  
   if (typeof  this.state.data.AbbreviationOne !== "undefined") {
       if (!this.state.data.AbbreviationOne.match(/^[a-zA-Z ]*$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.AbbreviationOne = "*Please enter alphabet characters only.";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
   }
 
    
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
   
}


async validateAbbreviationTwo(event) {
   
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.AbbreviationTwo = "";                         
   this.setState({errors});
 
   if (typeof  this.state.data.AbbreviationTwo !== "undefined") {
       if (!this.state.data.AbbreviationTwo.match(/^[a-zA-Z ]*$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.AbbreviationTwo = "*Please enter alphabet characters only.";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
   }
    
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
   
}

async validateOtherLastName(event) {
   
   this.handleInput(event);    
   let errors = Object.assign({}, this.state.errors);     
   errors.OtherLastName = "";                         
   this.setState({errors});
 
   if(this.state.data.OtherLastName === "" || (isNaN(this.state.data.OtherLastName) === false))
   {  
       let errors = Object.assign({}, this.state.errors);     
       errors.OtherLastName = "*Please enter your Other LastName";                         
       this.setState({errors});
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.OtherLastName !== "undefined") {
       if (!this.state.data.OtherLastName.match(/^[a-zA-Z ]*$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.OtherLastName = "*Please enter alphabet characters only.";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
   }
 
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
   
}

async validateOtherFirstName(event) {
         
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.OtherFirstName = "";                         
   this.setState({errors});
 
   if(this.state.data.OtherFirstName === "" || (isNaN(this.state.data.OtherFirstName) === false))
   { 
       let errors = Object.assign({}, this.state.errors);     
       errors.OtherFirstName = "*Please enter your Other FirstName";                         
       this.setState({errors});
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.OtherFirstName !== "undefined") {
       if (!this.state.data.OtherFirstName.match(/^[a-zA-Z ]*$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.OtherFirstName = "*Please enter alphabet characters only.";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
   }
 
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
   
}

async validateOtherMiddleName(event) {
         
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.OtherMiddleName = "";                         
   this.setState({errors});
 
   if (typeof  this.state.data.OtherMiddleName !== "undefined") {
       if (!this.state.data.OtherMiddleName.match(/^[a-zA-Z ]*$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.OtherMiddleName = "*Please enter alphabet characters only.";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
   }

 
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
   
}


async validateFatherFirstName(event) {
         
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.FatherFirstName = "";                         
   this.setState({errors});

   if(this.state.data.FatherFirstName === "" || (isNaN(this.state.data.FatherFirstName) === false))
   { 
       let errors = Object.assign({}, this.state.errors);     
       errors.FatherFirstName = "*Please enter your Father's FirstName";                         
       this.setState({errors});
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.FatherFirstName !== "undefined") {
       if (!this.state.data.FatherFirstName.match(/^[a-zA-Z ]*$/)) {
            
           let errors = Object.assign({}, this.state.errors);     
           errors.FatherFirstName = "*Please enter alphabet characters only.";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
   }
 
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
   
}


async validateFatherLastName(event) {
         
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.FatherLastName = "";                         
   this.setState({errors});

   if(this.state.data.FatherLastName === "" || (isNaN(this.state.data.FatherLastName) === false))
   { 
       let errors = Object.assign({}, this.state.errors);     
       errors.FatherLastName = "*Please enter your Father's LastName";                         
       this.setState({errors});
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.FatherLastName !== "undefined") {
       if (!this.state.data.FatherLastName.match(/^[a-zA-Z ]*$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.FatherLastName = "*Please enter alphabet characters only.";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
   }

   
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
   
}

async validateFatherMiddleName(event) {
         
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.FatherMiddleName = "";                         
   this.setState({errors});

   if (typeof  this.state.data.FatherMiddleName !== "undefined") {
       if (!this.state.data.FatherMiddleName.match(/^[a-zA-Z ]*$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.FatherMiddleName = "*Please enter alphabet characters only.";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
   }
 
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
   
}


async validateMotherFirstName(event) {
         
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.MotherFirstName = "";                         
   this.setState({errors});
 
   if (typeof  this.state.data.MotherFirstName !== "undefined") {
       if (!this.state.data.MotherFirstName.match(/^[a-zA-Z ]*$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.MotherFirstName = "*Please enter alphabet characters only.";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
   }
 
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
   
}


async validateMotherLastName(event) {
         
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.MotherLastName = "";                         
   this.setState({errors});
  
   if (typeof  this.state.data.MotherMiddleName !== "undefined") {
       if (!this.state.data.MotherLastName.match(/^[a-zA-Z ]*$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.MotherLastName = "*Please enter alphabet characters only.";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
   }

   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
   
}

async validateMotherMiddleName(event) {
         
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.MotherMiddleName = "";                         
   this.setState({errors});
 
   if (typeof  this.state.data.MotherMiddleName !== "undefined") {
       if (!this.state.data.MotherMiddleName.match(/^[a-zA-Z ]*$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.MotherLastName = "*Please enter alphabet characters only.";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
   }

   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
   
}


async validateRALastName(event) {
         
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.RALastName = "";                         
   this.setState({errors});
 
   if(this.state.data.RALastName === "" || isNaN(this.state.data.RALastName) === false)
   { 
       let errors = Object.assign({}, this.state.errors);     
       errors.RALastName = "*Please enter your Representative Aseessee's LastName";                         
       this.setState({errors});
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.RALastName !== "undefined") {
       if (!this.state.data.RALastName.match(/^[a-zA-Z ]*$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.RALastName = "*Please enter alphabet characters only.";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
   }
 
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
   
}


async validateRAFirstName(event) {
      
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.RAFirstName = "";                         
   this.setState({errors});
 
   if(this.state.data.RAFirstName === "" || (isNaN(this.state.data.RAFirstName) === false))
   { 
       let errors = Object.assign({}, this.state.errors);     
       errors.RAFirstName = "*Please enter your Representative Aseessee's FirstName";                         
       this.setState({errors});
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.RAFirstName !== "undefined") {
       if (!this.state.data.RAFirstName.match(/^[a-zA-Z ]*$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.RAFirstName = "*Please enter alphabet characters only.";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
   }
    
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
   
}


async validateRAMiddleName(event) {
         
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.RAMiddleName = "";                         
   this.setState({errors});
 
   if (typeof  this.state.data.RAMiddleName !== "undefined") {
       if (!this.state.data.RAMiddleName.match(/^[a-zA-Z ]*$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.RAMiddleName = "*Please enter alphabet characters only.";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
   }

    
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
   
}

async validateResidenceFlat(event) {
         
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.ResidenceFlat = "";                         
   this.setState({errors});
 
   if(this.state.data.ResidenceFlat === "" || ((isNaN(this.state.data.ResidenceFlat) === false) 
   && (this.state.data.ResidenceFlat.match(/^[ ]*$/))))
   { 
       let errors = Object.assign({}, this.state.errors);     
       errors.ResidenceFlat = "*Please enter your Residence Flat / Room / Door / Block No.";                         
       this.setState({errors});
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.ResidenceFlat !== "undefined") {
       if (!this.state.data.ResidenceFlat.match(/^[a-zA-Z0-9'-/ ]*$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.ResidenceFlat = "*Please enter alphanumeric characters only.";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
   }
    
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
   
}

async validateResidencePremises(event) {
         
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.ResidencePremises = "";                         
   this.setState({errors});
 
   if(this.state.data.ResidencePremises === "" || ((isNaN(this.state.data.ResidencePremises) === false) 
   && (this.state.data.ResidencePremises.match(/^[ ]*$/))))
   { 
       let errors = Object.assign({}, this.state.errors);     
       errors.ResidencePremises = "*Please enter your Residence Premises / Building / Village";                         
       this.setState({errors});
       this.state.isModalEnabled =  false;
    }
   else if (typeof  this.state.data.ResidencePremises !== "undefined") {
       if (!this.state.data.ResidencePremises.match(/^[a-zA-Z0-9 ]*$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.ResidencePremises = "*Please enter alphanumeric characters only.";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
   }
    
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
   
}

async validateResidenceRoad(event) {
         
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.ResidenceRoad = "";                         
   this.setState({errors});

   if(this.state.data.ResidenceRoad === "" || ((isNaN(this.state.data.ResidenceRoad) === false) 
   && (this.state.data.ResidenceRoad.match(/^[ ]*$/))))
   { 
       let errors = Object.assign({}, this.state.errors);     
       errors.ResidenceRoad = "*Please enter your Residence Road / Street / Lane / Post Office";                         
       this.setState({errors});
       this.state.isModalEnabled =  false;
    }
   else if (typeof  this.state.data.ResidenceRoad !== "undefined") {
       if (!this.state.data.ResidenceRoad.match(/^[a-zA-Z0-9 ]*$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.ResidenceRoad = "*Please enter alphanumeric characters only.";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
   }
    
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
   
}


async validateResidenceArea(event) {
         
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.ResidenceArea = "";                         
   this.setState({errors});
 
   if(this.state.data.ResidenceArea === "" || (isNaN(this.state.data.ResidenceArea) === false))
   { 
       let errors = Object.assign({}, this.state.errors);     
       errors.ResidenceArea = "*Please enter your Residence Area / Locality / Taluka / Sub-division";                         
       this.setState({errors});
       this.state.isModalEnabled =  false;
    }
   else if (typeof  this.state.data.ResidenceArea !== "undefined") {
       if (!this.state.data.ResidenceArea.match(/^[a-zA-Z ]*$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.ResidenceArea = "*Please enter alphabet characters only.";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
   }
    
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
   
}

async validateResidenceTown(event) {
         
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.ResidenceTown = "";                         
   this.setState({errors});

   if(this.state.data.ResidenceTown === "" || (isNaN(this.state.data.ResidenceTown) === false))
   { 
       let errors = Object.assign({}, this.state.errors);     
       errors.ResidenceTown = "*Please enter your Residence Town / City / District";                         
       this.setState({errors});
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.ResidenceTown !== "undefined") {
       if (!this.state.data.ResidenceTown.match(/^[a-zA-Z ]*$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.ResidenceTown = "*Please enter alphabet characters only.";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
   }
 
    
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
   
}


async validateOfficeName(event) {
         
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.OfficeName = "";                         
   this.setState({errors});
        
    if(this.state.officeEnabled)
    {
        if(this.state.data.OfficeName === "" || ((isNaN(this.state.data.OfficeName) === false) 
        && (this.state.data.OfficeName.match(/^[ ]*$/))))
        { 
             let errors = Object.assign({}, this.state.errors);     
             errors.OfficeName = "*Please enter your Office's Name";                         
             this.setState({errors});
             this.state.isModalEnabled =  false;
        }

    }
    else if (typeof  this.state.data.OfficeName !== "undefined") {
       if (!this.state.data.OfficeName.match(/^[a-zA-Z0-9 ]*$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.OfficeName = "*Please enter alphanumeric characters only.";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
   }
 
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
   
}

async validateOfficeFlat(event) {
         
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.OfficeFlat = "";                         
   this.setState({errors});
 
    if(this.state.officeEnabled)
    {
        if(this.state.data.OfficeFlat === "" || ((isNaN(this.state.data.OfficeFlat) === false) 
        && (this.state.data.OfficeFlat.match(/^[ ]*$/))))
        { 
            let errors = Object.assign({}, this.state.errors);     
            errors.OfficeFlat = "*Please enter your Office Flat / Room / Door / Block No.";                         
            this.setState({errors});
            this.state.isModalEnabled =  false;
        }
    }
    else if (typeof  this.state.data.OfficeFlat !== "undefined") {
       if (!this.state.data.OfficeFlat.match(/^[a-zA-Z0-9'-/ ]*$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.OfficeFlat = "*Please enter alphanumeric characters only.";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
   }
 

   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
   
}

async validateOfficePremises(event) {
         
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.OfficePremises = "";                         
   this.setState({errors});
 
   if(this.state.officeEnabled)
   {
    if(this.state.data.OfficePremises === "" || ((isNaN(this.state.data.OfficePremises) === false) 
    && (this.state.data.OfficePremises.match(/^[ ]*$/))))
    { 
        let errors = Object.assign({}, this.state.errors);     
        errors.OfficePremises = "*Please enter your Office Premises / Building / Village";                         
        this.setState({errors});
        this.state.isModalEnabled =  false;
    }
   }
   else if (typeof  this.state.data.OfficePremises !== "undefined") {
       if (!this.state.data.OfficePremises.match(/^[a-zA-Z0-9 ]*$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.OfficePremises = "*Please enter alphanumeric characters only.";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
   }
    
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
   
}

async validateOfficeRoad(event) {
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.OfficeRoad = "";                         
   this.setState({errors});
   
   if(this.state.officeEnabled)
   {
    if(this.state.data.OfficeRoad === "" || ((isNaN(this.state.data.OfficeRoad) === false) 
    && (this.state.data.OfficeRoad.match(/^[ ]*$/))))
    { 
        let errors = Object.assign({}, this.state.errors);     
        errors.OfficeRoad = "*Please enter your Office Road / Street / Lane / Post Office";                         
        this.setState({errors});
        this.state.isModalEnabled =  false;
    }

   }
   else if (typeof  this.state.data.OfficeRoad !== "undefined") {
       if (!this.state.data.OfficeRoad.match(/^[a-zA-Z0-9 ]*$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.OfficeRoad = "*Please enter alphanumeric characters only.";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
   }

   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
   
}


async validateOfficeArea(event) {
         
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.OfficeArea = "";                         
   this.setState({errors});

   if(this.state.officeEnabled)
   {
    if(this.state.data.OfficeArea === "" || (isNaN(this.state.data.OfficeArea) === false))
    { 
        let errors = Object.assign({}, this.state.errors);     
        errors.OfficeArea = "*Please enter your Office Area / Locality / Taluka / Sub-division";                         
        this.setState({errors});
        this.state.isModalEnabled =  false;
    }

   }
   else if (typeof  this.state.data.OfficeArea !== "undefined") {
       if (!this.state.data.OfficeArea.match(/^[a-zA-Z ]*$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.OfficeArea = "*Please enter alphabet characters only.";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
   }
    
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
   
}

async validateOfficeTown(event) {
         
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.OfficeTown = "";                         
   this.setState({errors});
 
   if(this.state.officeEnabled)
   {
    if(this.state.data.OfficeTown === "" || (isNaN(this.state.data.OfficeTown) === false))
    { 
        let errors = Object.assign({}, this.state.errors);     
        errors.OfficeTown = "*Please enter your Office Town / City / District";                         
        this.setState({errors});
        this.state.isModalEnabled =  false;
    }
   }
   else if (typeof  this.state.data.OfficeTown !== "undefined") {
       if (!this.state.data.OfficeTown.match(/^[a-zA-Z ]*$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.OfficeTown = "*Please enter alphabet characters only.";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
   }
 
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
   
}


async validateRAFlat(event) {
         
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.RAFlat = "";                         
   this.setState({errors});
 
   if(this.state.data.RAFlat === "" || ((isNaN(this.state.data.RAFlat) === false) 
   && (this.state.data.RAFlat.match(/^[ ]*$/))))
   { 
       let errors = Object.assign({}, this.state.errors);     
       errors.RAFlat = "*Please enter your Representative assesssee Flat / Room / Door / Block No.";                         
       this.setState({errors});
       this.state.isModalEnabled =  false;
    }
   else if (typeof  this.state.data.RAFlat !== "undefined") {
       if (!this.state.data.RAFlat.match(/^[a-zA-Z0-9'-/ ]*$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.RAFlat = "*Please enter alphanumeric characters only.";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
   }

    
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
   
}

async validateRAPremises(event) {
         
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.RAPremises = "";                         
   this.setState({errors});
 
   if(this.state.data.RAPremises === ""  || ((isNaN(this.state.data.RAPremises) === false) 
   && (this.state.data.RAPremises.match(/^[ ]*$/))))
   { 
       let errors = Object.assign({}, this.state.errors);     
       errors.RAPremises = "*Please enter your Representative assesssee Premises / Building / Village";                         
       this.setState({errors});
       this.state.isModalEnabled =  false;
    }
   else if (typeof  this.state.data.RAPremises !== "undefined") {
       if (!this.state.data.RAPremises.match(/^[a-zA-Z0-9 ]*$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.RAPremises = "*Please enter alphanumeric characters only.";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
   }
 
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
   
}


async validateRARoad(event) {
         
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.RARoad = "";                         
   this.setState({errors});
 
   if(this.state.data.RARoad === ""  || ((isNaN(this.state.data.RARoad) === false) 
   && (this.state.data.RARoad.match(/^[ ]*$/))))
   { 
       let errors = Object.assign({}, this.state.errors);     
       errors.RARoad = "*Please enter your Representative assesssee Road / Street / Lane / Post Office";                         
       this.setState({errors});
       this.state.isModalEnabled =  false;
    }
   else if (typeof  this.state.data.RARoad !== "undefined") {
       if (!this.state.data.RARoad.match(/^[a-zA-Z0-9 ]*$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.RARoad = "*Please enter alphanumeric characters only.";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
   }
    
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
   
}


async validateRAArea(event) {
         
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.RAArea = "";                         
   this.setState({errors});
 
   if(this.state.data.RAArea === "" || (isNaN(this.state.data.RAArea) === false))
   { 
       let errors = Object.assign({}, this.state.errors);     
       errors.RAArea = "*Please enter your Representative assesssee Area / Locality / Taluka / Sub-division";                         
       this.setState({errors});
       this.state.isModalEnabled =  false;
    }
   else if (typeof  this.state.data.RAArea !== "undefined") {
       if (!this.state.data.RAArea.match(/^[a-zA-Z ]*$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.RAArea = "*Please enter alphabet characters only.";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
   }
 
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
   
}

async validateRATown(event) {
         
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.RATown = "";                         
   this.setState({errors});
 
   if(this.state.data.RATown === "" || (isNaN(this.state.data.RATown) === false))
   { 
       let errors = Object.assign({}, this.state.errors);     
       errors.RATown = "*Please enter your Representative assesssee Town / City / District";                         
       this.setState({errors});
       this.state.isModalEnabled =  false;
  }
   else if (typeof  this.state.data.RATown !== "undefined") {
       if (!this.state.data.RATown.match(/^[a-zA-Z ]*$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.RATown = "*Please enter alphabet characters only.";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
   }
 
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));

   
}


async validateAadhaarFirstName(event) {
         
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.AadhaarFirstName = "";                         
   this.setState({errors});

  if (typeof  this.state.data.AadhaarFirstName !== "undefined") {
       if (!this.state.data.AadhaarFirstName.match(/^[a-zA-Z ]*$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.AadhaarFirstName = "*Please enter alphabet characters only.";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
   }
 
    
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
   
}


async validateAadhaarLastName(event) {
         
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.AadhaarLastName = "";                         
   this.setState({errors});
 
   if(this.state.data.AadhaarLastName === "" || (isNaN(this.state.data.AadhaarLastName) === false))
   { 
       let errors = Object.assign({}, this.state.errors);     
       errors.AadhaarLastName ="*Please enter your Name as in Aadhaar Card or Enrolment Id";                         
       this.setState({errors});
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.AadhaarLastName !== "undefined") {
       if (!this.state.data.AadhaarLastName.match(/^[a-zA-Z ]*$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.AadhaarLastName = "*Please enter alphabet characters only.";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
   }
 
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
   
}

async validateAadhaarMiddleName(event) {
         
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.AadhaarMiddleName = "";                         
   this.setState({errors});
   
   if (typeof  this.state.data.AadhaarMiddleName !== "undefined") {
       if (!this.state.data.AadhaarMiddleName.match(/^[a-zA-Z ]*$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.AadhaarMiddleName = "*Please enter alphabet characters only.";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
   }
    
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
   
}


async validateAadhaarNumber(event) {
         
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.AadhaarNumber = "";                         
   this.setState({errors});
    
   if(this.state.errors.EnrolmentId === "*Please enter your Aadhaar Number or Enrolment Id")
   {
       let errors = Object.assign({}, this.state.errors);     
       errors.EnrolmentId = "";                         
       this.setState({errors});
   }
   
   if(this.state.data.AadhaarNumber === "" || ((isNaN(this.state.data.AadhaarNumber) === false) 
   && (this.state.data.AadhaarNumber.match(/^[ ]*$/))))  
   { 
       let errors = Object.assign({}, this.state.errors);     
       errors.AadhaarNumber = "*Please enter your Aadhaar Number or Enrolment Id";                         
       this.setState({errors});
       this.state.isModalEnabled =  false;
   } 
   else if (typeof  this.state.data.AadhaarNumber !== "undefined") {
       if (!this.state.data.AadhaarNumber.match(/^[0-9 ]*$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.AadhaarNumber = "*Please enter numeric characters only.";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
       
   }
 
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
   
}

async validateEnrolmentId(event) {
         
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.EnrolmentId = "";                         
   this.setState({errors});

   if(this.state.errors.AadhaarNumber === "*Please enter your Aadhaar Number or Enrolment Id")
   {
       let errors = Object.assign({}, this.state.errors);     
       errors.AadhaarNumber = "";                         
       this.setState({errors});
   }
   
   if((this.state.data.EnrolmentId === "") || ((isNaN(this.state.data.EnrolmentId) === false) 
   && (this.state.data.EnrolmentId.match(/^[ ]*$/))))  
   { 
       let errors = Object.assign({}, this.state.errors);     
       errors.EnrolmentId = "*Please enter your Aadhaar Number or Enrolment Id";                         
       this.setState({errors});
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.EnrolmentId !== "undefined") {
       if (!this.state.data.EnrolmentId.match(/^[0-9 ]*$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.EnrolmentId = "*Please enter numeric characters only.";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
       
   }
    
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
   
   
}


async validateRegistrationNumber(event) {
         
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.RegistrationNumber = "";                         
   this.setState({errors});
 
   if (typeof  this.state.data.RegistrationNumber !== "undefined") {
       if (!this.state.data.RegistrationNumber.match(/^[0-9 ]*$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.RegistrationNumber = "*Please enter numeric characters only.";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
   }
    
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
   
}

 
async validateResidencePincode(event) {
         
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.ResidencePincode = "";                         
   this.setState({errors});
 
   if(this.state.data.ResidencePincode === "" )
   { 
       let errors = Object.assign({}, this.state.errors);     
       errors.ResidencePincode = "*Please enter your Residence Pincode";                         
       this.setState({errors});
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.ResidencePincode !== "undefined") {
       if (!this.state.data.ResidencePincode.match(/^[1-9][0-9]*$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.ResidencePincode = "*Please enter valid pincode";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
   }
 
    
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
   
}



async validateOfficePincode(event) {
         
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.OfficePincode = "";                         
   this.setState({errors});
 
    if(this.state.officeEnabled)
    {
        if(this.state.data.OfficePincode === "" || (this.state.data.OfficePincode.match(/^[ ]*$/)))
        { 
            let errors = Object.assign({}, this.state.errors);     
            errors.OfficePincode = "*Please enter your Office Pincode";                         
            this.setState({errors});
            this.state.isModalEnabled =  false;
        }
    }
    else if (typeof  this.state.data.OfficePincode !== "undefined") {
       if (!this.state.data.OfficePincode.match(/^[1-9][0-9]*$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.OfficePincode = "*Please enter valid pincode";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
   }
 
    
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
   
}

 

async validateRAPincode(event) {
         
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.RAPincode = "";                         
   this.setState({errors});
   
   if(this.state.data.RAPincode === "")
   { 
       let errors = Object.assign({}, this.state.errors);     
       errors.RAPincode = "*Please enter your Representative Assessee's Pincode";                         
       this.setState({errors});
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.RAPincode !== "undefined") {
       if (!this.state.data.RAPincode.match(/^[1-9][0-9]*$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.RAPincode = "*Please enter valid pincode";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
   }
 
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
}

async validateCountryCode(event) {
         
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.CountryCode = "";                         
   this.setState({errors});
 
   if(this.state.data.CountryCode === "")
   { 
       let errors = Object.assign({}, this.state.errors);     
       errors.CountryCode = "*Please enter your Country Code";                         
       this.setState({errors});
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.CountryCode !== "undefined") {
       if (!this.state.data.CountryCode.match(/^[0-9]*$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.CountryCode = "*Please enter numbers only.";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
   }
 
    
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
   
}


async validateStdCode(event) {
         
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.StdCode = "";                         
   this.setState({errors});
 
   if(this.state.data.StdCode === "")
   { 
       let errors = Object.assign({}, this.state.errors);     
       errors.StdCode = "*Please enter your Std Code";                         
       this.setState({errors});
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.StdCode !== "undefined") {
       if (!this.state.data.StdCode.match(/^[0-9]*$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.StdCode = "*Please enter numbers only.";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
   }
 
    
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
   
}


async validatePhoneNumber(event) {
         
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.PhoneNumber = "";                         
   this.setState({errors});
  
 
   if(this.state.data.PhoneNumber === "")
   { 
       let errors = Object.assign({}, this.state.errors);     
       errors.PhoneNumber = "*Please enter your Phone Number";                         
       this.setState({errors});
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.PhoneNumber !== "undefined") {
       if (!this.state.data.PhoneNumber.match(/^[0-9+]*$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.PhoneNumber = "*Please enter numbers only.";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
   }
 
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));

   
}

async validateDay(event) {
         
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.Day = "";                         
   this.setState({errors});
   
   if(this.state.data.Day === "")
   { 
       let errors = Object.assign({}, this.state.errors);     
       errors.Day = "*Please enter your Birth Day";                         
       this.setState({errors});
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.Day !== "undefined") {
       if (!this.state.data.Day.match(/^(0?[1-9]|[12][0-9]|3[01])$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.Day = "*Please enter valid Day";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
   }
 
    
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
   
}

async validateMonth(event) {
         
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.Month = "";                         
   this.setState({errors});
    
    
   if(this.state.data.Month === "")
   { 
       let errors = Object.assign({}, this.state.errors);     
       errors.Month = "*Please enter your Birth Month";                         
       this.setState({errors});
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.Month !== "undefined") {
       if (!this.state.data.Month.match(/^(0[1-9]|1[0-2])$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.Month = "*Please enter valid month";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
   }
 
    
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
}

async validateYear(event) {
         
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.Year = "";                         
   this.setState({errors});
   
   if(this.state.data.Year === "")
   { 
       let errors = Object.assign({}, this.state.errors);     
       errors.Year = "*Please enter your Birth Year";                         
       this.setState({errors});
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.Year !== "undefined") {
       if (!this.state.data.Year.match(/^(19|20)\d{2}$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.Year = "*Please enter valid Year";                         
           this.setState({errors});
           this.state.isModalEnabled =  false;
       }
   }
    
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
   
}


async validatephonenumber(event) {
         
   this.handleInput(event);
   let errors = Object.assign({}, this.state.errors);     
   errors.phonenumber = "";                         
   this.setState({errors});
 
   if(this.state.data.phonenumber === "" )
   { 
       let errors = Object.assign({}, this.state.errors);     
       errors.phonenumber = "*Please enter your phonenumber";                         
       this.setState({errors});
   }
   else if (typeof  this.state.data.phonenumber !== "undefined") {
       if (!this.state.data.phonenumber.match(/^\d{4}$/)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.phonenumber = "*Please enter valid phonenumber";                         
           this.setState({errors});
       }
   }
 
    
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
   
}

handleInput = (event) => {

   let temp = this.state.data;
   let {name,value} =event.target;
   temp[name] = value;
   this.setState({temp});

   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
  
 }


   
  handleResidenceState = (event) => {

    let ResidenceState = this.state.data;
    let {name,value} =event.target;
    this.setState(ResidenceState);
    ResidenceState[name] = value;  

    localStorage.setItem('localdata', JSON.stringify(this.state.data));
    localStorage.setItem('localerror', JSON.stringify(this.state.errors));

    let errors = Object.assign({}, this.state.errors);     
    errors.ResidenceState = "";                         
    this.setState({errors});
    let textPattern = /^[a-zA-Z ]*$/ 
   

    if(this.state.data.ResidenceState === "" || (isNaN(this.state.data.ResidenceState) === false))
    { 
        let errors = Object.assign({}, this.state.errors);     
        errors.ResidenceState = "*Please enter your Residence State";                         
        this.setState({errors});
     
        let isModalEnabled = this.state.isModalEnabled;
        isModalEnabled = false;
        this.setState({isModalEnabled});
         
    }
    else if (typeof  this.state.data.ResidenceState !== "undefined") {
        if (!textPattern.test(this.state.data.ResidenceState)) {
            let errors = Object.assign({}, this.state.errors);     
            errors.ResidenceState  = "*Please enter alphabet characters only";                         
            this.setState({errors});
     
            let isModalEnabled = this.state.isModalEnabled;
            isModalEnabled = false;
            this.setState({isModalEnabled});

        }
    }
 
  }


  handleResidenceCountry = (event) => {

   let ResidenceCountry = this.state.data;
   let {name,value} =event.target;
   this.setState(ResidenceCountry);
   ResidenceCountry[name] = value;  
    
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
    
   let errors = Object.assign({}, this.state.errors);     
   errors.ResidenceCountry = "";                         
   this.setState({errors});
   let textPattern = /^[a-zA-Z ]*$/ 
  

   if(this.state.data.ResidenceCountry === "" || (isNaN(this.state.data.ResidenceCountry) === false))
   { 
       let errors = Object.assign({}, this.state.errors);     
       errors.ResidenceCountry = "*Please enter your Residence Country";                         
       this.setState({errors});
   
       let val = this.state.isModalEnabled;
       val = false;
       this.setState({val});
   }
   else if (typeof  this.state.data.ResidenceCountry !== "undefined") {
       if (!textPattern.test(this.state.data.ResidenceCountry)) {
           let errors = Object.assign({}, this.state.errors);     
           errors.ResidenceCountry = "*Please enter alphabet characters only.";                         
           this.setState({errors});
          
           let val = this.state.isModalEnabled;
           val = false;
           this.setState({val});
       }
   }
 
 }


 handleOfficeState = (event) => {

   let OfficeState = this.state.data;
   let {name,value} =event.target;
   this.setState(OfficeState);
   OfficeState[name] = value;  
   
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));

   let errors = Object.assign({}, this.state.errors);     
   errors.OfficeState = "";                         
   this.setState({errors});
   let textPattern = /^[a-zA-Z ]*$/ 
  

   if(this.state.officeEnabled)
   {
    if(this.state.data.OfficeState === "" || (isNaN(this.state.data.OfficeState) === false))
    { 
        let errors = Object.assign({}, this.state.errors);     
        errors.OfficeState = "*Please enter your Office State";                         
        this.setState({errors});
       
        let val = this.state.isModalEnabled;
        val = false;
        this.setState({val});
    }
   }
   else if (typeof  this.state.data.OfficeState !== "undefined") {
       if (!textPattern.test(this.state.data.OfficeState)) {

           let errors = Object.assign({}, this.state.errors);     
           errors.OfficeState  = "*Please enter alphabet characters only.";                         
           this.setState({errors});
          
           let val = this.state.isModalEnabled;
           val = false;
           this.setState({val});
       }
   }
 
 }


 handleOfficeCountry = (event) => {

   let OfficeCountry = this.state.data;
   let {name,value} =event.target;
   this.setState(OfficeCountry);
   OfficeCountry[name] = value;  
    
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));

   let errors = Object.assign({}, this.state.errors);     
   errors.OfficeCountry = "";                         
   this.setState({errors});
   let textPattern = /^[a-zA-Z ]*$/ 
  
   if(this.state.officeEnabled)
   {
    if(this.state.data.OfficeCountry === "" || (isNaN(this.state.data.OfficeCountry) === false))
    { 
        let errors = Object.assign({}, this.state.errors);     
        errors.OfficeCountry = "*Please enter your OfficeCountry";                         
        this.setState({errors});
        this.state.isModalEnabled =  false;
    }

   }
   else if (typeof  this.state.data.OfficeCountry !== "undefined") {
       if (!textPattern.test(this.state.data.OfficeCountry)) {

           let errors = Object.assign({}, this.state.errors);     
           errors.OfficeCountry = "*Please enter alphabet characters only.";                         
           this.setState({errors});
      
           let val = this.state.isModalEnabled;
           val = false;
           this.setState({val});
       }
   }
}

 handleRAState = (event) => {

   let RAState = this.state.data;
   let {name,value} =event.target;
   this.setState(RAState);
   RAState[name] = value;  
   
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));

   let errors = Object.assign({}, this.state.errors);     
   errors.RAState = "";                         
   this.setState({errors});
   let textPattern = /^[a-zA-Z ]*$/ 
  
   
   if(this.state.data.RAState === "" || (isNaN(this.state.data.RAState) === false))
   {
       let errors = Object.assign({}, this.state.errors);     
       errors.RAState  = "*Please enter your Representative Assessee's State";                         
       this.setState({errors});

       let val = this.state.isModalEnabled;
       val = false;
       this.setState({val});
   }
   else if (typeof  this.state.data.RAState !== "undefined") {
       if (!textPattern.test(this.state.data.RAState)) {

           let errors = Object.assign({}, this.state.errors);     
           errors.RAState  = "*Please enter alphabet characters only.";                         
           this.setState({errors});

           let val = this.state.isModalEnabled;
           val = false;
           this.setState({val});
       }
   }

 }


 handlePOI = (event) => {

   let POI = this.state.data;
   let {name,value} =event.target;
   this.setState(POI);
   POI[name] = value;  
   
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));

   let errors = Object.assign({}, this.state.errors);     
   errors.POI = "";                         
   this.setState({errors});
   let textPattern = /^[a-zA-Z ]*$/ 
  
   
   if(this.state.data.POI === "" || (isNaN(this.state.data.POI) === false))
   { 
       let errors = Object.assign({}, this.state.errors);     
       errors.POI = "*Please enter your Proof Of Identity";                         
       this.setState({errors});
 
       let val = this.state.isModalEnabled;
       val = false;
       this.setState({val});
   }
   else if (typeof  this.state.data.POI !== "undefined") {
       if (!textPattern.test(this.state.data.POI)) {
           
           let errors = Object.assign({}, this.state.errors);     
           errors.POI = "*Please enter alphabet characters only.";                         
           this.setState({errors});

           let val = this.state.isModalEnabled;
           val = false;
           this.setState({val});
       }
   }
 
 }


 handlePOA = (event) => {

   let POA = this.state.data;
   let {name,value} =event.target;
   this.setState(POA);
   POA[name] = value;  
    
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));

   let errors = Object.assign({}, this.state.errors);     
   errors.POA = "";                         
   this.setState({errors});
   let textPattern = /^[a-zA-Z ]*$/ 
  
   
   if(this.state.data.POA === "" || (isNaN(this.state.data.POA) === false))
   { 
       let errors = Object.assign({}, this.state.errors);     
       errors.POA = "*Please enter your Proof Of Address";                         
       this.setState({errors});

       let val = this.state.isModalEnabled;
       val = false;
       this.setState({val});
   }
   else if (typeof  this.state.data.POA !== "undefined") {
       if (!textPattern.test(this.state.data.POA)) {
           
           let errors = Object.assign({}, this.state.errors);     
           errors.POA = "*Please enter alphabet characters only.";                         
           this.setState({errors});

           let val = this.state.isModalEnabled;
           val = false;
           this.setState({val});
       }
   }
 
 }


 handlePOB = (event) => {

   let POB = this.state.data;
   let {name,value} =event.target;
   this.setState(POB);
   POB[name] = value;  
     
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));

   let errors = Object.assign({}, this.state.errors);     
   errors.POB = "";                         
   this.setState({errors});
   let textPattern = /^[a-zA-Z ]*$/ 
  
   
   if(this.state.data.POB === "" || (isNaN(this.state.data.POB) === false))
   {  
       let errors = Object.assign({}, this.state.errors);     
       errors.POB = "*Please enter your Proof Of Birth";                         
       this.setState({errors});

       let val = this.state.isModalEnabled;
       val = false;
       this.setState({val});
   }
   else if (typeof  this.state.data.POB !== "undefined") {
       if (!textPattern.test(this.state.data.POB)) {

           let errors = Object.assign({}, this.state.errors);     
           errors.POB = "*Please enter alphabet characters only.";                         
           this.setState({errors});

           let val = this.state.isModalEnabled;
           val = false;
           this.setState({val});
       }
   }

 }


 handleApplicant = (event) => {

   let Applicant = this.state.data;
   let {name,value} =event.target;
   this.setState(Applicant);
   Applicant[name] = value;  
   
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));


   this.state.errors.Applicant = "";
   let textPattern = /^[a-zA-Z ]*$/ 
  
   
   if(this.state.data.Applicant === "" || (isNaN(this.state.data.Applicant) === false))
   { 
       this.state.errors.Applicant = "*Please enter your Applicant's name";
       let val = this.state.isModalEnabled;
       val = false;
       this.setState({val});
   }
   else if (typeof  this.state.data.Applicant !== "undefined") {
       if (!textPattern.test(this.state.data.Applicant)) {

           this.state.errors.Applicant = "*Please enter alphabet characters only.";
           let val = this.state.isModalEnabled;
           val = false;
           this.setState({val});
       }
   }

   let error = this.state.errors.Applicant;
   this.setState({error});
 }

 handleCapacity = (event) => {

   let temp = this.state.data;
   let {name,value} =event.target;
   this.setState(temp);
   temp[name] = value;  
   
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));


   this.state.errors.Capacity = "";
   let textPattern = /^[a-zA-Z ]*$/ 
  
   
   if(this.state.data.Capacity === "")
   { 
       this.state.errors.Capacity = "*Please enter your Capacity";
 
       let val = this.state.isModalEnabled;
       val = false;
       this.setState({val});
   }
   else if (typeof  this.state.data.Capacity !== "undefined") {
       if (!textPattern.test(this.state.data.Capacity)) {

           this.state.errors.Capacity = "*Please enter alphabetic characters only.";

           let val = this.state.isModalEnabled;
           val = false;
           this.setState({val});
       }
   }

   let error = this.state.errors.Capacity;
   this.setState({error});
 }


 handleEmail = (event) => {

  let Email = this.state.data;
  let {name,value} =event.target;
  this.setState(Email);
  Email[name] = value;
  
  localStorage.setItem('localdata', JSON.stringify(this.state.data));
  localStorage.setItem('localerror', JSON.stringify(this.state.errors));
 
  this.state.errors.Email = "";
  let textPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/


  if(this.state.data.Email === "" || (isNaN(this.state.data.Email) === false))
  {
      this.state.errors.Email = "*Please enter your Email";
      this.state.isModalEnabled =  false;
  }
  else if (typeof  this.state.data.Email !== "undefined") {
      if (!textPattern.test(this.state.data.Email)) {
          this.state.errors.Email = "*Please enter valid Email-id";
          this.state.isModalEnabled =  false;
      }
  }


  let error = this.state.errors.Email;
  this.setState({error});
 }

 handleBusinessCode1 = (event) => {
 
   let BusinessCode1 = this.state.data;
   let {name,value} =event.target;
   this.setState(BusinessCode1);
   BusinessCode1[name] = value;  
   
   this.state.errors.BusinessCode1 = "";
   let textPattern = /^[0-9]*$/ 
  
   
   if(this.state.data.BusinessCode1 === "")
   { 
       this.state.errors.BusinessCode1 = "*Please enter your Business code";
 
       let val = this.state.isModalEnabled;
       val = false;
       this.setState({val});
   }
   else if (typeof  this.state.data.BusinessCode1 !== "undefined") {
       if (!textPattern.test(this.state.data.BusinessCode1)) {
          
           this.state.errors.BusinessCode1 = "*Please enter valid Business Code";
           let val = this.state.isModalEnabled;
           val = false;
           this.setState({val});
       }
   }
   let error = this.state.errors.BusinessCode1;
   this.setState({error});

    
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
    
 }


 handleBusinessCode2 = (event) => {
 
   let BusinessCode2 = this.state.data;
   let {name,value} =event.target;
   this.setState(BusinessCode2);
   BusinessCode2[name] = value;  
 
   this.state.errors.BusinessCode2 = "";
   let textPattern = /^[0-9]*$/ 
  
   
   if (typeof  this.state.data.BusinessCode2 !== "undefined") {
       if (!textPattern.test(this.state.data.BusinessCode2)) {

           this.state.errors.BusinessCode2 = "*Please enter valid Business Code";

           let val = this.state.isModalEnabled;
           val = false;
           this.setState({val});
       }
   }
   let error = this.state.errors.BusinessCode2;
   this.setState({error});
   
   let BusinessCode = this.state.data.BusinessCode;
   BusinessCode = this.state.data.BusinessCode1 + this.state.data.BusinessCode2;
   this.setState({BusinessCode})

    
   localStorage.setItem('localdata', JSON.stringify(this.state.data));
   localStorage.setItem('localerror', JSON.stringify(this.state.errors));
  
 }

  render() {

    const { open } = this.state;
    return (
   <div>
     <div className="nav">
      <div className="navbar">
       <label className="navtitle">Panform</label>
       <button  className="button button3 navbutton"  onClick={this.onOpenModal}>Download </button>
       {/* <button class="button1 button3 navbutton"  onClick={this.handleReset}>Reset </button> */}
        </div>
        <Modal   open={open} onClose={this.onCloseModal} center>
            <br />
            <div className="modalhead container">
            <label>Enter your mobile number:</label><br />
            <div className="mobilenumber">
            <OtpInput
             className = ""
             id = "phonenumber"
             numValue={this.state.data.phonenumber}
             numInputs={10}
             onChange={otp => this.handleInputdata(otp,"phonenumber","1")}
           />

           </div>
           <span className="ErrorMsg">{this.state.errors.phonenumber}</span>
           <br />
           <button onClick={this.sendno}>Send OTP</button><br /><br />
           {this.state.check === 1 ?
             <div>
             <div className="otpnumber">
             <OtpInput
               className = ""
               value={this.state.data.otpnumber}
               onChange={otp => this.handleInputdata(otp,"otpnumber","1")}
               numInputs={6}
             />
              </div>
              <br />
              <button onClick={this.sendmsg}>Verify OTP</button><br /><br />
              {this.state.secondcheck === 1 ?
              <div>
               <button onClick={this.savepdf}>Save & Download</button> &nbsp; &nbsp; &nbsp; OR &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
               <button onClick={this.getdata}>Get data</button>
               </div>
               : 
               ""
               }
            </div> 
            :
            "" 
            }
            </div>
            </Modal>
                
            </div> <br />

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
                   <div className = "ColouredLabel"> 
                      <label > &nbsp; &nbsp; 1 &nbsp; Full Name (Full expanded name to be mentioned as appearing in proof of identity/date of birth/address documents: initials are not permitted)</label>
                   </div>


                   <label className="FirstLabel"> Please select title,</label>
                   <label className="Label_with_no_space"> as applicable</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 

                    
                   <input 
                       type="checkbox" 
                       className="Check" 
                       id="1" 
                       name="NameTitleOne[1][]" 
                       value= "Shri" 
                       onClick={(e)=>this.handleNameTitleOneCheck(e,"NameTitleOne")}/>

                   <label className="Label_with_no_space"> Shri</label>

                   <input 
                      type="checkbox" 
                      className="Check"
                      id = "2"
                      name = "NameTitleOne[1][]"
                      value = "Smt."
                      onClick={(e)=>this.handleNameTitleOneCheck(e,"NameTitleOne")}/>

                   <label className="Label_with_no_space"> Smt.</label>

                   <input 
                      type="checkbox" 
                      className="Check"
                      id = "3"
                      name = "NameTitleOne[1][]"
                      value = "Kumari"
                      onClick={(e)=>this.handleNameTitleOneCheck(e,"NameTitleOne")}/>

                   <label className="Label_with_no_space"> Kumari</label>

                   <input 
                      type="checkbox" 
                      className="Check"
                      id = "4"
                      name = "NameTitleOne[1][]"
                      value = "M/s"
                      onClick={(e)=>this.handleNameTitleOneCheck(e,"NameTitleOne")}/>

                   <label className="Label_with_no_space"> M/s</label> <br /> 
                    
                
                  
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
                            style= {{width: "437px"}}
                            className = "name"
                            type="text" 
                            id="LastName" 
                            name="LastName" 
                            maxLength="25" 
                            value={this.state.data.LastName}
                            onChange={event => this.validateLastName(event)}
                          /> <br/>
                          <span className="ErrorMsg">{this.state.errors.LastName}</span> 

                          </div>
                          <div>
                            <input 
                            style= {{width: "437px"}}
                            className = "name"
                            type="text" 
                            id="FirstName" 
                            name="FirstName" 
s                            maxLength="25" 
                            value={this.state.data.FirstName}
                            onChange={event => this.validateFirstName(event)}
                          /> <br/>
                          <span className="ErrorMsg">{this.state.errors.FirstName}</span>
                          </div>
                          
                           <div>   
                            <input 
                            style= {{width: "437px"}}
                            className = "name"
                            type="text" 
                            id="MiddleName" 
                            name="MiddleName" 
                            maxLength="25" 
                            value={this.state.data.MiddleName}
                            onChange={event => this.validateMiddleName(event)}
                           />  <br/>  
                            <span className="ErrorMsg">{this.state.errors.MiddleName}</span>
                            <span className="ErrorMsg">{this.state.errors.NameTitleOne}</span>
                            </div>
                         </td>
                      </tr>
                      </tbody>
                   </table>
                   

                   {/* Second Component */}

                   <div className = "ColouredLabel">
                      <label > &nbsp; &nbsp;2 &nbsp; Abbreviations of the above name, as you would like it, to be printed on the PAN card</label>
                     
                   </div>
                   
                   <div className = "box_left"> 
                       <div> 
                       <input 
                            style= {{width: "647px"}}
                            className = "name"
                            type="text" 
                            id="AbbreviationOne" 
                            name="AbbreviationOne" 
                            maxLength="37" 
                            value={this.state.data.AbbreviationOne}
                            onChange={event => this.validateAbbreviationOne(event)}
                          /> <br/>
                          <span className="ErrorMsg">{this.state.errors.AbbreviationOne}</span>
                        </div>
                            
                        <div>
                         <input 
                            style= {{width: "647px"}}
                            className = "name"
                            type="text" 
                            id="AbbreviationTwo" 
                            name="AbbreviationTwo" 
                            maxLength="37" 
                            value={this.state.data.AbbreviationTwo}
                            onChange={event => this.validateAbbreviationTwo(event)}
                          /> <br/>

                       <span className="ErrorMsg">{this.state.errors.AbbreviationTwo}</span>
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
                            style= {{width: "437px"}}
                            className = "name"
                            type="text" 
                            id="OtherLastName" 
                            name="OtherLastName" 
                            maxLength="25" 
                            value={this.state.data.OtherLastName}
                            onChange={event => this.validateOtherLastName(event)}
                          /> <br/>
                          <span className="ErrorMsg">{this.state.errors.OtherLastName}</span>
                          </div>
                           
                           <div> 
                           <input 
                            style= {{width: "437px"}}
                            className = "name"
                            type="text" 
                            id="OtherFirstName" 
                            name="OtherFirstName" 
                            maxLength="25" 
                            value={this.state.data.OtherFirstName}
                            onChange={event => this.validateOtherFirstName(event)}
                           />  <br/>
                           <span className="ErrorMsg">{this.state.errors.OtherFirstName}</span>
                           </div>
 
                          <div>
                          <input 
                            style= {{width: "437px"}}
                            className = "name"
                            type="text" 
                            id="OtherMiddleName" 
                            name="OtherMiddleName" 
                            maxLength="25" 
                            value={this.state.data.OtherMiddleName}
                            onChange={event => this.validateOtherMiddleName(event)}
                           />  <br/>
                          
                           </div>
                         </td>
                      </tr>
                   </tbody>
                   </table>
                   </div>
                    
                   <span className="ErrorMsg">{this.state.errors.OtherMiddleName}</span>
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
                              style= {{width: "34px"}}
                              className = "name"
                              type="text" 
                              id="Day" 
                              name="Day" 
                              maxLength="2" 
                              value={this.state.data.Day}
                              onChange={event => this.validateDay(event)}
                           />    
                            
                           </td>  
                           <td >
                           <input 
                              style= {{width: "34px"}}
                              className = "name"
                              type="text" 
                              id="Month" 
                              name="Month" 
                              maxLength="2" 
                              value={this.state.data.Month}
                              onChange={event => this.validateMonth(event)}
                           /> 
                           </td>
                           <td className = "Year_td">
                           <input 
                              style= {{width: "69px"}}
                              className = "name"
                              type="text" 
                              id="Year" 
                              name="Year" 
                              maxLength="4" 
                              value={this.state.data.Year}
                              onChange={event => this.validateYear(event)}
                           /> 
                           </td>
                          </tr>
                       </tbody>
                       </table>

                       <span className="ErrorMsg">{this.state.errors.Day} </span>  &nbsp;&nbsp;
                       <span className="ErrorMsg">{this.state.errors.Month}</span>  &nbsp;&nbsp;
                       <span className="ErrorMsg">{this.state.errors.Year}</span>

            
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
                            style= {{width: "437px"}}
                            className = "name"
                            type="text" 
                            id="FatherLastName" 
                            name="FatherLastName" 
                            maxLength="25" 
                            value={this.state.data.FatherLastName}
                            onChange={event => this.validateFatherLastName(event)}
                           />  <br/>
                           <span className="ErrorMsg">{this.state.errors.FatherLastName}</span>
                           </div>
                           
                           <div>
                           <input 
                            style= {{width: "437px"}}
                            className = "name"
                            type="text" 
                            id="FatherFirstName" 
                            name="FatherFirstName" 
                            maxLength="25" 
                            value={this.state.data.FatherFirstName}
                            onChange={event => this.validateFatherFirstName(event)}
                           />  <br/>
                           <span className="ErrorMsg">{this.state.errors.FatherFirstName}</span>
                           </div>

                           <div>
                           <input 
                            style= {{width: "437px"}}
                            className = "name"
                            type="text" 
                            id="FatherMiddleName" 
                            name="FatherMiddleName" 
                            maxLength="25" 
                            value={this.state.data.FatherMiddleName}
                            onChange={event => this.validateFatherMiddleName(event)}
                           />  <br/>
                            <span className="ErrorMsg">{this.state.errors.FatherMiddleName}</span>
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
                            style= {{width: "437px"}}
                            className = "name"
                            type="text" 
                            id="MotherLastName" 
                            name="MotherLastName" 
                            maxLength="25" 
                            value={this.state.data.MotherLastName}
                            onChange={event => this.validateMotherLastName(event)}
                           />  
                           <br/>
                           <span className="ErrorMsg">{this.state.errors.MotherLastName}</span>
                           </div>


                           <div>  
                           <input
                            style= {{width: "437px"}}
                            className = "name"
                            type="text" 
                            id="MotherFirstName" 
                            name="MotherFirstName" 
                            maxLength="25" 
                            value={this.state.data.MotherFirstName}
                            onChange={event => this.validateMotherFirstName(event)}
                           />  <br/>
                           <span className="ErrorMsg">{this.state.errors.MotherFirstName}</span>
                           </div>

                           <div>    
                           <input 
                            style= {{width: "437px"}}
                            className = "name"
                            type="text" 
                            id="MotherMiddleName" 
                            name="MotherMiddleName" 
                            maxLength="25" 
                            value={this.state.data.MotherMiddleName}
                            onChange={event => this.validateMotherMiddleName(event)}
                           />  <br/>
                            <span className="ErrorMsg">{this.state.errors.MotherMiddleName}</span>
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
                    <label className="Italic_text">(Please tick as applicable)</label> <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="ErrorMsg">{this.state.errors.ParentName}</span>


                  {/* Seventh Component */}

                    <div  className = "ColouredLabel">
                       <label> &nbsp;&nbsp; 7 &nbsp; Address </label>
                    </div>

                    <label className="FirstLabel Bold"> Residence Address</label><br />

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
                            style= {{width: "437px"}}
                            className = "name"
                            type="text" 
                            id="ResidenceFlat" 
                            name="ResidenceFlat" 
                            maxLength="25" 
                            value={this.state.data.ResidenceFlat}
                            onChange={event => this.validateResidenceFlat(event)}
                           />   <br/>
                           <span className="ErrorMsg">{this.state.errors.ResidenceFlat}</span>
                           </div>
                             
                           <div>
                           <input 
                            style= {{width: "437px"}}
                            className = "name"
                            type="text" 
                            id="ResidencePremises" 
                            name="ResidencePremises" 
                            maxLength="25" 
                            value={this.state.data.ResidencePremises}
                            onChange={event => this.validateResidencePremises(event)}
                           />  <br/>
                           <span className="ErrorMsg">{this.state.errors.ResidencePremises}</span>
                           </div>

                           <div> 
                            <input 
                            style= {{width: "437px"}}
                            className = "name"
                            type="text" 
                            id="ResidenceRoad" 
                            name="ResidenceRoad" 
                            maxLength="25" 
                            value={this.state.data.ResidenceRoad}
                            onChange={event => this.validateResidenceRoad(event)}
                           />    <br/>
                           <span className="ErrorMsg">{this.state.errors.ResidenceRoad}</span>
                           </div>
                            
                           <div>
                            <input 
                            style= {{width: "437px"}}
                            className = "name"
                            type="text" 
                            id="ResidenceArea" 
                            name="ResidenceArea" 
                            maxLength="25" 
                            value={this.state.data.ResidenceArea}
                            onChange={event => this.validateResidenceArea(event)}
                           />  <br/>
                           <span className="ErrorMsg">{this.state.errors.ResidenceArea}</span>
                           </div>

                           <div>
                           <input 
                            style= {{width: "437px"}}
                            className = "name"
                            type="text" 
                            id="ResidenceTown" 
                            name="ResidenceTown" 
                            maxLength="25" 
                            value={this.state.data.ResidenceTown}
                            onChange={event => this.validateResidenceTown(event)}
                           /> <br/>
                           <span className="ErrorMsg">{this.state.errors.ResidenceTown}</span>
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
                                value={this.state.data.ResidenceState}
                                onChange={event => this.handleResidenceState(event)}/>
                             
                          </td>
                          <td> 
                              
                             <input 
                              style= {
                                 { 
                                    width: "121.5px",
                                    height: "15px"
                                 }
                              }
                              className = "name PincodeValue"
                              type="text" 
                              id="ResidencePincode" 
                              name="ResidencePincode" 
                              maxLength="7" 
                              value={this.state.data.ResidencePincode}
                              onChange={event => this.validateResidencePincode(event)}
                           /> 

                           </td>
                           <td cellPadding = "0" cellSpacing = "0">
                             <input 
                                className = "CountryValue"
                                name="ResidenceCountry"
                                value={this.state.data.ResidenceCountry}
                                onChange={event => this.handleResidenceCountry(event)}/>
                             
                           </td>
                            
                       </tr>
                       
                       
                    </tbody>
                    </table>
                    <span className="ErrorMsg">{this.state.errors.ResidenceState}</span>  &nbsp;&nbsp;
                    <span className="ErrorMsg">{this.state.errors.ResidencePincode}</span> &nbsp;&nbsp;
                    <span className="ErrorMsg">{this.state.errors.ResidenceCountry}</span>



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

                    <label className = "FirstLabel Bold">Office Address </label> <br/>


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
                            style= {{width: "437px"}}
                            className = "name"
                            type="text" 
                            id="OfficeName" 
                            name="OfficeName" 
                            maxLength="25" 
                            value={this.state.data.OfficeName}
                            onChange={event => this.validateOfficeName(event)}
                           /> <br/>
                           <span className="ErrorMsg">{this.state.errors.OfficeName}</span>
                           </div>
                           
                           <div>
                            <input 
                            style= {{width: "437px"}}
                            className = "name"
                            type="text" 
                            id="OfficeFlat" 
                            name="OfficeFlat" 
                            maxLength="25" 
                            value={this.state.data.OfficeFlat}
                            onChange={event => this.validateOfficeFlat(event)}
                           />  <br/>
                           <span className="ErrorMsg">{this.state.errors.OfficeFlat}</span>
                           </div>

                           <div>
                           <input 
                            style= {{width: "437px"}}
                            className = "name"
                            type="text" 
                            id="OfficePremises" 
                            name="OfficePremises" 
                            maxLength="25" 
                            value={this.state.data.OfficePremises}
                            onChange={event => this.validateOfficePremises(event)}
                           />    <br/>
                           <span className="ErrorMsg">{this.state.errors.OfficePremises}</span>
                           </div>
                            
                           <div>
                           <input 
                            style= {{width: "437px"}}
                            className = "name"
                            type="text" 
                            id="OfficeRoad" 
                            name="OfficeRoad" 
                            maxLength="25" 
                            value={this.state.data.OfficeRoad}
                            onChange={event => this.validateOfficeRoad(event)}
                           /> <br/>
                           <span className="ErrorMsg">{this.state.errors.OfficeRoad}</span>
                           </div>
                            
                           <div>
                            <input 
                            style= {{width: "437px"}}
                            className = "name"
                            type="text" 
                            id="OfficeArea" 
                            name="OfficeArea" 
                            maxLength="25" 
                            value={this.state.data.OfficeArea}
                            onChange={event => this.validateOfficeArea(event)}
                           /> <br/>
                           <span className="ErrorMsg">{this.state.errors.OfficeArea}</span>
                           </div>


                           <div>    
                            <input 
                            style= {{width: "437px"}}
                            className = "name"
                            type="text" 
                            id="OfficeTown" 
                            name="OfficeTown" 
                            maxLength="25" 
                            value={this.state.data.OfficeTown}
                            onChange={event => this.validateOfficeTown(event)}
                           />  <br/>  
                            <span className="ErrorMsg">{this.state.errors.OfficeTown}</span>
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
                                 value={this.state.data.OfficeState}
                                 onChange={event => this.handleOfficeState(event)}/>
                                
                          </td>
                          <td> 
                          <input 
                              style= {
                                 { 
                                    width: "121.5px",
                                    height: "15px"
                                 }
                              }
                              className = "name PincodeValue"
                              type="text" 
                              id="OfficePincode" 
                              name="OfficePincode" 
                              maxLength="7" 
                              value={this.state.data.OfficePincode}
                              onChange={event => this.validateOfficePincode(event)}
                           /> 
                           </td>
                           <td cellPadding = "0" cellSpacing = "0">
                             <input 
                                className = "CountryValue"
                                name="OfficeCountry"
                                value={this.state.data.OfficeCountry}
                                onChange={event => this.handleOfficeCountry(event)}/>
                               
                           </td>
                       </tr>
                        
                    </tbody>
                    </table>
                    <span className="ErrorMsg">{this.state.errors.OfficeState}</span> &nbsp; &nbsp;
                    <span className="ErrorMsg">{this.state.errors.OfficePincode}</span>  &nbsp; &nbsp;
                    <span className="ErrorMsg">{this.state.errors.OfficeCountry}</span>


                    

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
                                   style= {
                                    { 
                                       width: "51px",
                                       height: "15px"
                                       }
                                     }
                                   className = "name"
                                   type="text" 
                                   id="CountryCode" 
                                   name="CountryCode" 
                                   maxLength="3" 
                                   value={this.state.data.CountryCode}
                                   onChange={event => this.validateCountryCode(event)}
                                 />    
                                  
                                </td>  
                                <td >
                                <input 
                                   style= {
                                    { 
                                       width: "121.6px",
                                       height: "15px"
                                     }
                                    }
                                   className = "name"
                                   type="text" 
                                   id="StdCode" 
                                   name="StdCode" 
                                   maxLength="7" 
                                   value={this.state.data.StdCode}
                                   onChange={event => this.validateStdCode(event)}
                                 />    
                                </td>
                                <td className = "Telephone_td">

                                <input 
                                   style= {
                                    { 
                                       width: "226px",
                                       height: "15px"
                                     }
                                    }
                                   className = "name"
                                   type="text" 
                                   id="PhoneNumber" 
                                   name="PhoneNumber" 
                                   maxLength="13" 
                                   value={this.state.data.PhoneNumber}
                                   onChange={event => this.validatePhoneNumber(event)}
                                 />    
                                    
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
                        onChange={event => this.handleEmail(event)}/> <br/>

                     <span className="ErrorMsg">{this.state.errors.CountryCode}</span> &nbsp;
                     <span className="ErrorMsg">{this.state.errors.StdCode}</span> &nbsp;
                     <span className="ErrorMsg">{this.state.errors.PhoneNumber}</span>  &nbsp;
                     <span className="ErrorMsg">{this.state.errors.Email}</span>
                    
                    {/* Tenth Component */}

                    <div className = "ColouredLabel">
                       <label >&nbsp;&nbsp; 10 &nbsp; Status of applicant</label> <br/>
                    </div>
                    

                    <label className="FirstLabel"> &nbsp;&nbsp;Please select status,</label>  
                    <label className="Label_with_no_space"> as applicable</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                    
                    <input 
                       type="checkbox" 
                       className="Check GovernmentCheck"
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
                    </div>
                    
                    <div className= "IndividualCheck">   

                             <input 
                                   style= {
                                    { 
                                       width: "524px",
                                       height: "15px"
                                     }
                                    }
                                   className = "name"
                                   type="text" 
                                   id="RegistrationNumber" 
                                   name="RegistrationNumber" 
                                   maxLength="30" 
                                   value={this.state.data.RegistrationNumber}
                                   onChange={event => this.validateRegistrationNumber(event)}
                                 />   <br/>
                        <span className="ErrorMsg">{this.state.errors.RegistrationNumber}</span>
                    </div>

                    {/* Twelth Component */}

                    <div className = "ColouredLabel"> 
                    <label > &nbsp;&nbsp;12 &nbsp; In case of a person, who is required to quote Aadhaar number or the Enrolment ID of Aadhaar application form as per section 139 AA</label>
                    </div>
                   
                    <div className= "divtwelve">
                       <table>
                       <tbody>
                           <tr>
                              <td  className ="twelve_td">
                                 <label  className ="twelve" >Please mention your AADHAAR number (if allotted) </label>
                              </td>
                              <td >
                              <input 
                                   style= {
                                    { 
                                       width: "209px",
                                       height: "15px"
                                     }
                                    }
                                   className = "name"
                                   type="text" 
                                   id="AadhaarNumber" 
                                   name="AadhaarNumber" 
                                   maxLength="12" 
                                   value={this.state.data.AadhaarNumber}
                                   onChange={event => this.validateAadhaarNumber(event)}
                                 />   <br/>
                                 <span className="ErrorMsg">{this.state.errors.AadhaarNumber}</span>
 
                                  
                              </td>
                            </tr>
                       </tbody>
                       </table>
            
                    </div>

                    <label className="FirstLabel"> If AADHAAR number is not allotted, please mention the enrolment ID of Aadhaar application form </label> <br/>

                    <div className= "Left_space_input">   
                            <input 
                                   style= {
                                    { 
                                       width: "489px",
                                       height: "15px"
                                     }
                                    }
                                   className = "name"
                                   type="text" 
                                   id="EnrolmentId" 
                                   name="EnrolmentId" 
                                   maxLength="28" 
                                   value={this.state.data.EnrolmentId}
                                   onChange={event => this.validateEnrolmentId(event)}
                                 />    <br/>
                    <span className="ErrorMsg">{this.state.errors.EnrolmentId}</span>

                        

                    </div>

                    <label className="FirstLabel"> Name as per AADHAAR letter or card or as per the Enrolment ID of Aadhaar application form</label> <br/>
                    
                    <div className = "Left_space2">
                          <div> 
                          <input 
                            style= {{width: "436px"}}
                            className = "name"
                            type="text" 
                            id="AadhaarLastName" 
                            name="AadhaarLastName" 
                            maxLength="25" 
                            value={this.state.data.AadhaarLastName}
                            onChange={event => this.validateAadhaarLastName(event)}
                           /> <br/>
                           <span className="ErrorMsg">{this.state.errors.AadhaarLastName}</span>
                           </div>
                         
                           <div>
                          <input 
                            style= {{width: "436px"}}
                            className = "name"
                            type="text" 
                            id="AadhaarFirstName" 
                            name="AadhaarFirstName" 
                            maxLength="25" 
                            value={this.state.data.AadhaarFirstName}
                            onChange={event => this.validateAadhaarFirstName(event)}
                           />  <br/>
                           <span className="ErrorMsg">{this.state.errors.AadhaarFirstName}</span>
                           </div>
 
                           <div>
                          <input 
                            style= {{width: "436px"}}
                            className = "name"
                            type="text" 
                            id="AadhaarMiddleName" 
                            name="AadhaarMiddleName" 
                            maxLength="25" 
                            value={this.state.data.AadhaarMiddleName}
                            onChange={event => this.validateAadhaarMiddleName(event)}
                           />  <br/>
                        <span className="ErrorMsg">{this.state.errors.AadhaarMiddleName}</span>
                        </div>

                    </div>

                    {/* Thirteeenth Component */}

                    <div className = "ColouredLabel">  
                       <label>&nbsp;&nbsp;13 &nbsp; Source of Income</label> 
                       <label className = "ColouredLabel Move_End2 Italic_text"> Please select,</label> 
                       <label className = "ColouredLabel"> as applicable</label> 
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
                       onClick={(e)=>this.handleNoIncomeCheck(e,"NoIncome")}/> 
                    <label className = "Label_with_no_space"> No income</label> <br/>

                    <span className="ErrorMsg">{this.state.errors.BusinessCode1}</span> &nbsp;&nbsp;
                    <span className="ErrorMsg">{this.state.errors.BusinessCode2}</span>
                    <span className="ErrorMsg">{this.state.errors.Income}</span>
                     

                    {/* Fourteenth Component */}

                    <div className = "ColouredLabel"> 
                        <label >&nbsp;&nbsp; 14 &nbsp; Representative Assessee (RA)</label>
                    </div>
                     
                    <label className="FirstLabel"> &nbsp;&nbsp; Full name, address of the Representative Assessee, who is assessible under the Income Tax Act in respect of the person, whose particulars have
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;been given in the column 1-13.</label> 
                    
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
                            style= {{width: "437px"}}
                            className = "name"
                            type="text" 
                            id="RALastName" 
                            name="RALastName" 
                            maxLength="25" 
                            value={this.state.data.RALastName}
                            onChange={event => this.validateRALastName(event)}
                           />  <br/>
                           <span className="ErrorMsg">{this.state.errors.RALastName}</span>
                           </div>

                           <div>  
                           <input 
                            style= {{width: "437px"}}
                            className = "name"
                            type="text" 
                            id="RAFirstName" 
                            name="RAFirstName" 
                            maxLength="25" 
                            value={this.state.data.RAFirstName}
                            onChange={event => this.validateRAFirstName(event)}
                           /> <br/>
                           <span className="ErrorMsg">{this.state.errors.RAFirstName}</span>
                           </div>

                           <div>
                           <input 
                            style= {{width: "437px"}}
                            className = "name"
                            type="text" 
                            id="RAMiddleName" 
                            name="RAMiddleName" 
                            maxLength="25" 
                            value={this.state.data.RAMiddleName}
                            onChange={event => this.validateRAMiddleName(event)}
                           />  
                            <br/>
                            <span className="ErrorMsg">{this.state.errors.RAMiddleName}</span>
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
                            style= {{width: "437px"}}
                            className = "name"
                            type="text" 
                            id="RAFlat" 
                            name="RAFlat" 
                            maxLength="25" 
                            value={this.state.data.RAFlat}
                            onChange={event => this.validateRAFlat(event)}
                           />  <br/>
                           <span className="ErrorMsg">{this.state.errors.RAFlat}</span>
                           </div>

                           <div>
                           <input 
                            style= {{width: "437px"}}
                            className = "name"
                            type="text" 
                            id="RAPremises" 
                            name="RAPremises" 
                            maxLength="25" 
                            value={this.state.data.RAPremises}
                            onChange={event => this.validateRAPremises(event)}
                           />  <br/>
                           <span className="ErrorMsg">{this.state.errors.RAPremises}</span>
                           </div>
                            
                           <div>
                           <input 
                            style= {{width: "437px"}}
                            className = "name"
                            type="text" 
                            id="RARoad" 
                            name="RARoad" 
                            maxLength="25" 
                            value={this.state.data.RARoad}
                            onChange={event => this.validateRARoad(event)}
                           /> <br/>
                           <span className="ErrorMsg">{this.state.errors.RARoad}</span>
                           </div>

                           <div>   
                          <input 
                            style= {{width: "437px"}}
                            className = "name"
                            type="text" 
                            id="RAArea" 
                            name="RAArea" 
                            maxLength="25" 
                            value={this.state.data.RAArea}
                            onChange={event => this.validateRAArea(event)}
                           /> <br/>
                           <span className="ErrorMsg">{this.state.errors.RAArea}</span>
                           </div>

                           <div>
                          <input 
                            style= {{width: "437px"}}
                            className = "name"
                            type="text" 
                            id="RATown" 
                            name="RATown" 
                            maxLength="25" 
                            value={this.state.data.RATown}
                            onChange={event => this.validateRATown(event)}
                           /> <br/>
                           <span className="ErrorMsg">{this.state.errors.RATown}</span>
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
                                 value={this.state.data.RAState}
                                 onChange={event => this.handleRAState(event)}/>
                              
                          </td>
                          <td> 
                          <input 
                              style= {
                                 { 
                                    width: "122px",
                                    height: "15px"
                                 }
                              }
                              className = "name PincodeValue"
                              type="text" 
                              id="RAPincode" 
                              name="RAPincode" 
                              maxLength="7" 
                              value={this.state.data.RAPincode}
                              onChange={event => this.validateRAPincode(event)}
                           /> 
                            
                           </td>
                       </tr>
                        
                       
                    </tbody>
                    </table>
                    <span className="ErrorMsg">{this.state.errors.RAState}</span> &nbsp;&nbsp;     
                    <span className="ErrorMsg">{this.state.errors.RAPincode}</span>

                 
                 {/* Fifteenth Component */}
                   
                    <div className = "ColouredLabel">
                    <label  className = "ColouredLabel">&nbsp;&nbsp;15 &nbsp; Douments submitted as Proof of Identity (POI), Proof of Address (POA) and Proof of Date of Birth (POB)</label>
                    </div>
                    
                    <label className= "FirstLabel"> I/We have enclosed</label> &nbsp; 
                    <input 
                       type= "text" 
                       className = "CountryInput"
                       name="POI"
                       value={this.state.data.POI}
                       onChange={event => this.handlePOI(event)}/> &nbsp; 
                    <label className="Label_with_no_space"> as proof of identity,</label> &nbsp; 
                     

                    <input 
                       type= "text" 
                       className = "CountryInput"
                       name="POA"
                       value={this.state.data.POA}
                       onChange={event => this.handlePOA(event)}/> 
                       <br/>
                    
                    <label className= "FirstLabel"> as proof of address and</label>&nbsp; 
                     

                    <input 
                        type= "text" 
                        className = "CountryInput"
                        name="POB"
                        value={this.state.data.POB}
                        onChange={event => this.handlePOB(event)}/>&nbsp; 

                    <label className="Label_with_no_space"> as proof of date of birth.</label>
                    <span className="ErrorMsg">{this.state.errors.POI}</span> <br/>
                    <span className="ErrorMsg">{this.state.errors.POA}</span> &nbsp;&nbsp;
                    <span className="ErrorMsg">{this.state.errors.POB}</span>
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
                        value={this.state.data.Applicant}
                        onChange={event => this.handleApplicant(event)}/>
                    <label className= "Declaration2Label">, the applicant, in the capacity of</label> &nbsp;
                    
                    <input 
                        type= "text" 
                        className = "CountryInput"
                        name="Capacity"
                        value={this.state.data.Capacity}
                        onChange={event => this.handleCapacity(event)}/> <br/>

                    <label className= "FirstLabel">do hereby declare that what is stated above is true to the best of my/our information and belief.</label>  
                   
                    <span className="ErrorMsg">{this.state.errors.Applicant}</span> <br/>
                    <span className="ErrorMsg">{this.state.errors.Capacity}</span>

                </div>
                <br /><br />

           </div>
           <br />


       
            
      </div>

      <div className="Form3">
        {/* page 3 */}
        <div>
        <br />
        <img src={page3}  className="image3" />
        </div>
        <br />
        <div>
        <img src={page4}  className="image3" />
        </div>
        <br />
        <div>
        <img src={page5}  className="image3" />
        </div>
        <br />
        <div>
        <img src={page6}  className="image3" />
        </div>
        <br />
        <div>
        <img src={page7} className="image3" />
        </div>
        <br />
        <div>
        <img src={page8} className="image3" />
        </div>
        <br /><br />
        </div>
</div>

        </div>
    );
  }
}

export default Form1;