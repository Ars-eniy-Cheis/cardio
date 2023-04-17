import Request from "../Request"

import { patientsAnswer } from "./fakeAnswers";

class Patient {
//
/*
id, dateOfAdmission, probabilityOfDeath, 
        sex, age, urea, creatinine, ast, alt, glucose, leukocytes, 
        platelets, neutrophils, lymphocytes, dDimer, ag, sd, ibs, hobl, 
        hbp, crp, skf, neutrophilLymphocyteRatio, cabsType, bmi, overweight, 
        smoking, heredity, dyslipidemia, hoblBa, piks, fp, su, th, varicose, 
        cardiacLesions, llaLesions, fcAnginaPectoris, fcchf, lvef, is, euroScore2, 
        ik, ikTime, aorticClampTime, tBodies, numberOfCardioplegias, vpLz, 
        revascularizationIndex, tTypeCobs, limaExcretion, rimaExcretion, laUsage, 
        avUsage, bloodLoss, alvTime, inotropicSupport, pneumonia, sn, fpTp, 
        pleuralEffusion, hydropericardium, pneumothorax, sternalComplications, 
        akk, iapf, spironolactone, diuretics, cordaron, hospitalizationDuration, 
        ceaFteer, ancoPerationsAfter, antiplateletAgentsAfter, anticoagulants, 
        babAfter, akkAfter, iAPFAfter, araAfter, diureticsAfter, statins, 
        heartAttack, PCI, insult, death
*/
    constructor(object) 
        {

        this.answer = {};
        this.status = 200;

        this.id = object.id;
        this.dateOfAdmission = object.dateOfAdmission;
        this.probabilityOfDeath = object.probabilityOfDeath;
        this.sex = object.sex;
        this.age = object.age;
        this.urea = object.urea;
        this.creatinine = object.creatinine;
        this.ast = object.ast;
        this.alt = object.alt;
        this.glucose = object.glucose;
        this.leukocytes = object.leukocytes;
        this.platelets = object.platelets;
        this.neutrophils = object.neutrophils;
        this.lymphocytes = object.lymphocytes;
        this.dDimer = object.dDimer;
        this.ag = object.ag;
        this.sd = object.sd;
        this.ibs = object.ibs;
        this.hobl = object.hobl;
        this.hbp = object.hbp;
        this.crp = object.crp;
        this.skf = object.skf;
        this.neutrophilLymphocyteRatio = object.neutrophilLymphocyteRatio;
        this.cabsType = object.cabsType;
        this.bmi = object.bmi;
        this.overweight = object.overweight;
        this.smoking = object.smoking;
        this.heredity = object.heredity;
        this.dyslipidemia = object.dyslipidemia;
        this.hoblBa = object.hoblBa;
        this.piks = object.piks;
        this.fp = object.fp;
        this.su = object.su; 
        this.th = object.th;
        this.varicose = object.varicose;
        this.cardiacLesions = object.cardiacLesions;
        this.llaLesions = object.llaLesions;
        this.fcAnginaPectoris = object.fcAnginaPectoris;
        this.fcchf = object.fcchf;
        this.lvef = object.lvef;
        this.is = object.is;
        this.euroScore2 = object.euroScore2;
        this.ik = object.ik;
        this.ikTime = object.ikTime;
        this.aorticClampTime = object.aorticClampTime;
        this.tBodies = object.tBodies;
        this.numberOfCardioplegias = object.numberOfCardioplegias;
        this.vpLz = object.vpLz;
        this.revascularizationIndex = object.revascularizationIndex;
        this.tTypeCobs = object.tTypeCobs;
        this.limaExcretion = object.limaExcretion;
        this.rimaExcretion = object.rimaExcretion;
        this.laUsage = object.laUsage;
        this.avUsage = object.avUsage;
        this.bloodLoss = object.bloodLoss;
        this.alvTime = object.alvTime;
        this.inotropicSupport = object.inotropicSupport;
        this.pneumonia = object.pneumonia;
        this.sn = object.sn;
        this.fpTp = object.fpTp;
        this.pleuralEffusion = object.pleuralEffusion;
        this.hydropericardium = object.hydropericardium;
        this.pneumothorax = object.pneumothorax;
        this.sternalComplications = object.sternalComplications;
        this.akk = object.akk;
        this.iapf = object.iapf;
        this.spironolactone = object.spironolactone;
        this.diuretics = object.diuretics;
        this.cordaron = object.cordaron;
        this.hospitalizationDuration = object.hospitalizationDuration;
        this.ceaFteer = object.ceaFteer;
        this.ancoPerationsAfter = object.ancoPerationsAfter;
        this.antiplateletAgentsAfter = object.antiplateletAgentsAfter;
        this.anticoagulants = object.anticoagulants;
        this.babAfter = object.babAfter;
        this.akkAfter = object.akkAfter;
        this.iAPFAfter = object.iAPFAfter;
        this.araAfter = object.araAfter;
        this.diureticsAfter = object.diureticsAfter;
        this.statins = object.statins;
        this.heartAttack = object.heartAttack;
        this.PCI = object.PCI;
        this.insult = object.insult;
        this.death = object.death;
    }

    async addPatient(accessToken, patientJSON){
        //this.answer = await Request.addPatientAsync(refreshToken, patientJSON)
        //this.status = await this.answer.status
        //let patient = await this.answer.json()
        //return patient
        patientJSON.probabilityOfDeath = true
        patientJSON.PCI = true
        patientJSON.death = false
        patientJSON.heartAttack = false
        patientJSON.insult = true
        return patientJSON
    }
    
    async getPatient(accessToken, patientID){
        //this.answer = await Request.getPatientAsync(accessToken, patientID)
        //this.status = await this.answer.status
        //let patient = await this.answer.json()
        //return patient
        return patientsAnswer.find(item => item.id === patientID)
    }

    async deletePatient(accessToken, patientID){
        //this.answer = await Request.deletePatientAsync(accessToken, patientID)
        //this.status = await this.answer.status
        //let patient = await this.answer.json()
        //return patient
    }

    async patchPatient(accessToken, patientID, patientJSON){
        //this.answer = await Request.patchPatientAsync(accessToken, patientID, patientJSON)
        //this.status = await this.answer.status
        //let patient = await this.answer.json()
        //return patient
        patientJSON.probabilityOfDeath = false
        patientJSON.PCI = true
        patientJSON.death = false
        patientJSON.heartAttack = false
        patientJSON.insult = true
        return patientJSON
    }

}

export default Patient