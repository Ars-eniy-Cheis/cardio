class CovidPatient {
    constructor(id, dateOfAdmission, probabilityOfDeath, sex, age, urea, creatinine, ast, alt, glucose, leukocytes, platelet, neutrophils, lymphocytes, dDimer, ag, sd, ibs, hobl, hbp, crp, skf, neutrophilLymphocyteRatio) {
        this.id = id;
        this.dateOfAdmission = dateOfAdmission;
        this.probabilityOfDeath = probabilityOfDeath;
        this.sex = sex;
        this.age = age;
        this.urea = urea;
        this.creatinine = creatinine;
        this.ast = ast;
        this.alt = alt;
        this.glucose = glucose;
        this.leukocytes = leukocytes;
        this.platelet = platelet;
        this.neutrophils = neutrophils;
        this.lymphocytes = lymphocytes;
        this.dDimer = dDimer;
        this.ag = ag;
        this.sd = sd;
        this.ibs = ibs;
        this.hobl = hobl;
        this.hbp = hbp;
        this.crp = crp;
        this.skf = skf;
        this.neutrophilLymphocyteRatio = neutrophilLymphocyteRatio;
    }

}

export default CovidPatient