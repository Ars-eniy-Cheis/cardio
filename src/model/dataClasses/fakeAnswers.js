const usersAnswer = [
    {
        id: 10,
        registrationDate: 1678891010,
        surname:"Калинько",
        name: "Арсений",
        fathersName: "Евгеньевич",
        login: "Arseniy",
        role: "admin"
    },
    {
        id: 44,
        registrationDate: 1678977410,
        surname:"Шванев",
        name: "Арсений",
        fathersName: "Алексеевич",
        login: "doctor",
        role: "user"
    },
    {
        id: 120,
        registrationDate: 1679063810,
        surname:"Бауэр",
        name: "Рудольф",
        fathersName: "Евгеньевич",
        login: "rudenf",
        role: "user"
    },
]

const patientsCovid = {
  contents: [
    {
      id: 8,
      description: "",
      type: "covid",
      properties: {
        death: true
      },
      createdAt: 1672954315,
      updatedAt: 1672957315,
    },
    {
      id: 12,
      description: "",
      type: "covid",
      properties: {
        death: false
      },
      createdAt: 1672704315,
      updatedAt: 1672867315,
    },
    {
      id: 2,
      description: "",
      type: "covid",
      properties: {
        death: true
      },
      createdAt: 1672924315,
      updatedAt: 1672997315,
    }
  ],
  "page": 1,
  "pageSize": 100,
  "numberOfElements": 0,
  "totalPages": 0,
  "totalElements": 0
}

const patientsCabs = {
  contents: [
    {
      id: 8,
      description: "",
      type: "cabs",
      properties: {
        heartAttack: false,
        PCI: true,
        insult:  false,
        death: true
      },
      createdAt: 1672954315,
      updatedAt: 1672957315,
    },
    {
      id: 12,
      description: "",
      type: "cabs",
      properties: {
        heartAttack: false,
        PCI: false,
        insult:  false,
        death: false
      },
      createdAt: 1672704315,
      updatedAt: 1672867315,
    },
    {
      id: 2,
      description: "",
      type: "cabs",
      properties: {
        heartAttack: false,
        PCI: true,
        insult:  true,
        death: true
      },
      createdAt: 1672924315,
      updatedAt: 1672997315,
    }
  ],
  "page": 1,
  "pageSize": 100,
  "numberOfElements": 0,
  "totalPages": 0,
  "totalElements": 0
}

const patientsAnswer = [
    {
      "sex": "male",
      "age": 60,
      "urea": 13.7,
      "creatinine": 106.0,
      "SKF": 63.39622641509434,
      "AST": 42.0,
      "ALT": 47.0,
      "CRP": 7.31,
      "glucose": 4.7,
      "leukocytes": 16.4,
      "platelets": 213.0,
      "neutrophils": 14.699999999999998,
      "lymphocytes": 0.9,
      "neutrophilLymphocyteRatio": 16.33333333333333,
      "severity": "severe",
      "DDimer": 250.0,
      "AG": true,
      "SD": false,
      "IBS": false,
      "HOBL": false,
      "HBP": false,

      "death": false,

      "cabsKind": false,
      "BMI": 35.5,
      "syntaxScore": 30.5,
      "arterialHypertension": true,
      "diabetes": false,
      "obesity": true,
      "smoking": true,
      "heredity": false,
      "dyslipidemia": false,
      "asthma": false,
      "postinfarctionCardiosclerosis": false,
      "atrialFibrillation": false,
      "chronicRenalInsufficiency": false,
      "pepticUlcer": false,
      "thyroidDisorders": false,
      "varicoseVein": false,
      "insult": false,
      "lowerLimbIschemia": false,
      "anginaFuncClass": "3-4",
      "chronicHeartFailureFuncClass": "3",
      "leftVentricularEjectionFraction": 73,
      "interventricularSeptum": 1.3,
      "euroScoreII": 0.83,
      "artificialCirculation": true,
      "artificialCirculationTime": 103,
      "aorticConstrictionTime": 63,
      "bodyTemperature": 32.3,
      "cardioplegiaNumber": "0-2",
      "ventriculoplastLV": false,
      "revascularizationIdx": "4-5",
      "yCoronaryBypass": false,
      "litaDischarge": "flap",
      "ritaDischarge": "flap",
      "radialArteryUsage": false,
      "poplitealArteryUsage": true,
      "bloodLoss": 800,
      "artificialVentTime": 445,
      "inotropicSupport": true,
      "pneumonia": false,
      "heartFailure": false,
      "reanimationAtrialFibrillation": true,
      "pleuralEffusion": false,
      "hydropericardium": false,
      "pneumothorax": false,
      "sternalComplications": false,
      "postCalciumChannelAntagonists": false,
      "postAngiotensinInhibitors": false,
      "spironolactone": false,
      "postDiuretics": false,
      "cordarone": true,
      "hospitalizationDuration": 29,
      "carotidEndarterectomy": false,
      "lowerLimbSurgery": false,
      "antiaggregants": true,
      "anticoagulants": false,
      "betaAB": false,
      "angiotensinAntagonists": true,
      "statins": true,

      "MI": true,
      "CI": false,
      "insultOutcome": false
    },
    {
        id: 2,
        dateOfAdmission: 1672955825,
        probabilityOfDeath: true,
        sex: true,
        age: 45,
        urea: 234,
        creatinine: 523,
        ast: 131,
        alt: 4121,
        glucose: 633,
        leukocytes: 5233,
        platelets: 890,
        neutrophils: 67,
        lymphocytes: 870,
        dDimer: 5654,
        ag:  false,
        sd: true,
        ibs: true,
        hobl: false,
        hbp: true,
        crp: 74,
        skf: 234,
        neutrophilLymphocyteRatio: 2345,
        cabsType: true,
        bmi: 235,
        overweight:  false,
        smoking: true,
        heredity:  false,
        dyslipidemia: true,
        hoblBa:  false,
        piks: true,
        fp:  false,
        su: true,
        th:  false,
        varicose: true,
        cardiacLesions:  false,
        llaLesions: true,
        fcAnginaPectoris:  false,
        fcchf: true,
        lvef: 2342,
        is: 134,
        euroScore2: 253, 
        ik: 235,
        ikTime: 524,
        aorticClampTime: 234,
        tBodies: 4234,
        numberOfCardioplegias:  false,
        vpLz: true,
        revascularizationIndex:  false,
        tTypeCobs: true,
        limaExcretion:  false,
        rimaExcretion: "f",
        laUsage:  false,
        avUsage: true,
        bloodLoss: 7454,
        alvTime: 2345,
        inotropicSupport: true,
        pneumonia:  false,
        sn: true,
        fpTp:  false,
        pleuralEffusion: true,
        hydropericardium:  false,
        pneumothorax: true,
        sternalComplications:  false,
        akk: true,
        iapf:  false,
        spironolactone: true,
        diuretics:  false,
        cordaron: true,
        hospitalizationDuration: 25,
        ceaFteer:  false,
        ancoPerationsAfter: true,
        antiplateletAgentsAfter:  false,
        anticoagulants: true,
        babAfter:  false,
        akkAfter: true,
        iAPFAfter:  false,
        araAfter: true,
        diureticsAfter:  false,
        statins: true,
        heartAttack:  false,
        PCI: true,
        insult:  false,
        death: true
    },
    {
        id: 12,
        dateOfAdmission: 1672954356,
        probabilityOfDeath: false,
        sex: false,
        age: 60,
        urea: 234,
        creatinine: 523,
        ast: 131,
        alt: 4121,
        glucose: 633,
        leukocytes: 5233,
        platelets: 890,
        neutrophils: 67,
        lymphocytes: 870,
        dDimer: 5654,
        ag:  false,
        sd: true,
        ibs: true,
        hobl: false,
        hbp: true,
        crp: 74,
        skf: 234,
        neutrophilLymphocyteRatio: 2345,
        cabsType: true,
        bmi: 235,
        overweight:  false,
        smoking: true,
        heredity:  false,
        dyslipidemia: true,
        hoblBa:  false,
        piks: true,
        fp:  false,
        su: true,
        th:  false,
        varicose: true,
        cardiacLesions:  false,
        llaLesions: true,
        fcAnginaPectoris:  false,
        fcchf: true,
        lvef: 2342,
        is: 134,
        euroScore2: 253, 
        ik: 235,
        ikTime: 524,
        aorticClampTime: 234,
        tBodies: 4234,
        numberOfCardioplegias:  false,
        vpLz: true,
        revascularizationIndex:  false,
        tTypeCobs: true,
        limaExcretion:  false,
        rimaExcretion: "n",
        laUsage:  false,
        avUsage: true,
        bloodLoss: 7454,
        alvTime: 2345,
        inotropicSupport: true,
        pneumonia:  false,
        sn: true,
        fpTp:  false,
        pleuralEffusion: true,
        hydropericardium:  false,
        pneumothorax: true,
        sternalComplications:  false,
        akk: true,
        iapf:  false,
        spironolactone: true,
        diuretics:  false,
        cordaron: true,
        hospitalizationDuration: 25,
        ceaFteer:  false,
        ancoPerationsAfter: true,
        antiplateletAgentsAfter:  false,
        anticoagulants: true,
        babAfter:  false,
        akkAfter: true,
        iAPFAfter:  false,
        araAfter: true,
        diureticsAfter:  false,
        statins: true,
        heartAttack:  false,
        PCI: true,
        insult:  false,
        death: false
    }
]

const cabsParametersAnswer = [

]

const schemasAnswer = {
  steps: [
    {
      label: "covid",
      fields: [
        {
          "label": "Пол",
          "name": "sex",
          "type": "doubleSelection",
          "values": ["Муж", "Жен"],
          "isRequired": true,
          "enum": {"male": "Муж", "female": "Жен"}
        },
        {
          "label": "Возраст",
          "name": "age",
          "type": "textInput",
          "limits": {"min": 10.0, "max": 100.0},
          "isRequired": true,
        },
        {
          "label": "Мочевина",
          "name": "urea",
          "type": "textInput",
          "isRequired": false,
          "limits": {"min": 10.0, "max": 40.0},
        },
        {
          "label": "Креатинин",
          "name": "creatinine",
          "type": "textInput",
          "isRequired": false,
          "limits": {"min": 50.0, "max": 300.0},
        },
        {
          "label": "АСТ",
          "name": "AST",
          "type": "textInput",
          "isRequired": false,
          "limits": {"min": 10.0, "max": 200.0},
        },
        {
          "label": "АЛТ",
          "name": "ALT",
          "type": "textInput",
          "isRequired": false,
          "limits": {"min": 10.0, "max": 200.0},
        },
        {
          "label": "Глюкоза",
          "name": "glucose",
          "type": "textInput",
          "isRequired": false,
          "limits": {"min": 1.0, "max": 20.0},
        },
        {
          "label": "Лейкоциты",
          "name": "leukocytes",
          "type": "textInput",
          "isRequired": false,
          "limits": {"min": 0.5, "max": 20.0},
        },
        {
          "label": "Тромбоциты",
          "name": "platelets",
          "type": "textInput",
          "isRequired": false,
          "limits": {"min": 5.0, "max": 300.0},
        },
        {
          "label": "Нейтрофилы",
          "name": "neutrophils",
          "type": "textInput",
          "isRequired": false,
          "limits": {"min": 0.5, "max": 15.0},
        },
        {
          "label": "Лимфоциты",
          "name": "lymphocytes",
          "type": "textInput",
          "isRequired": false,
          "limits": {"min": 0.5, "max": 15.0},
        },
        {
          "label": "D-димер",
          "name": "DDimer",
          "type": "textInput",
          "isRequired": false,
          "limits": {"min": 100.0, "max": 5000.0},
        },
        {
          "label": "АГ",
          "name": "AG",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
        {
          "label": "СД",
          "name": "SD",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
        {
          "label": "ИБС (с ХСН)",
          "name": "IBS",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
        {
          "label": "ХОБЛ + астма",
          "name": "HOBL",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
        {
          "label": "ХБП (3-5)",
          "name": "HBP",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
        {
          "label": "CRP",
          "name": "CRP",
          "type": "textInput",
          "isRequired": false,
          "limits": {"min": 2.0, "max": 300.0},
        },
        {
          "label": "СКФ (CKD-EPI 2021)",
          "name": "SKF",
          "type": "textInput",
          "isRequired": false,
          "limits": {"min": 5.0, "max": 300.0},
        },
        {
          "label": "Нейтрофил-лимф. соотношение",
          "name": "neutrophilLymphocyteRatio",
          "type": "textInput",
          "isRequired": false,
          "limits": {"min": 5.0, "max": 50.0},
        },
        {
          "label": "Степень тяжести",
          "name": "severity",
          "type": "tripleSelection",
          "isRequired": true,
          "values": ["Лёгкая", "Средняя", "Тяжёлая"],
          "enum": {"light": "Лёгкая", "medium": "Средняя", "severe": "Тяжёлая"}
        }
      ]
    },
    {
      label: "cabs",
      fields: [
        {
          "label": "Вид КШ",
          "name": "cabsKind",
          "type": "doubleSelection",
          "values": ["БиМКШ", "АКШ"],
          "isRequired": false,
          "enum": {1: "БиМКШ", 0: "АКШ"}
        },
        {
          "label": "Пол",
          "name": "sex",
          "type": "doubleSelection",
          "values": ["Муж", "Жен"],
          "isRequired": true,
          "enum": {"male": "Муж", "female": "Жен"}
        },
        {
          "label": "Возраст",
          "name": "age",
          "type": "textInput",
          "isRequired": true,
          "limits": {"min": 10.0, "max": 100.0},
        },
        {
          "label": "ИМТ",
          "name": "BMI",
          "type": "textInput",
          "isRequired": false,
          "limits": {"min": 15.0, "max": 40.0},
        },
        {
          "label": "SyntaxScore (исходный)",
          "name": "syntaxScore",
          "type": "textInput",
          "isRequired": false,
          "limits": {"min": 10.0, "max": 90.0},
        },
        {
          "label": "АГ",
          "name": "arterialHypertension",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
        {
          "label": "SD",
          "name": "diabetes",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
        {
          "label": "Изб. масса",
          "name": "obesity",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
        {
          "label": "Курение",
          "name": "smoking",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
        {
          "label": "Наследственность",
          "name": "heredity",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
        {
          "label": "Дислипидемия",
          "name": "dyslipidemia",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
        {
          "label": "ХОБЛ/БА",
          "name": "asthma",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
        {
          "label": "ПИКС",
          "name": "postinfarctionCardiosclerosis",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
        {
          "label": "ФП",
          "name": "atrialFibrillation",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
        {
          "label": "ХБП",
          "name": "chronicRenalInsufficiency",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
        {
          "label": "ЯБЖ/ЖКБ",
          "name": "pepticUlcer",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
        {
          "label": "ЗЩЖ",
          "name": "thyroidDisorders",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
        {
          "label": "Варикоз",
          "name": "varicoseVein",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
        {
          "label": "Поражение БЦА/КЭЭ/инсульт",
          "name": "insult",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
        {
          "label": "Поражение АНК или ВА",
          "name": "lowerLimbIschemia",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
        {
          "label": "ФК стенокардии",
          "name": "anginaFuncClass",
          "type": "doubleSelection",
          "values": ["1-2", "3-4"],
          "isRequired": false,
          "enum": {"1-2": "1-2", "3-4": "3-4"}
        },
        {
          "label": "ФК ХСН",
          "name": "chronicHeartFailureFuncClass",
          "type": "doubleSelection",
          "values": ["1-2", "3-4"],
          "isRequired": false,
          "enum": {"1-2": "1-2", "3": "3"}
        },
        {
          "label": "ФВ ЛЖ",
          "name": "leftVentricularEjectionFraction",
          "type": "textInput",
          "isRequired": false,
          "limits": {"min": 20.0, "max": 90.0},
        },
        {
          "label": "МЖП",
          "name": "interventricularSeptum",
          "type": "textInput",
          "isRequired": false,
          "limits": {"min": 0.5, "max": 3.0},
        },
        {
          "label": "EuroScore II",
          "name": "euroScoreII",
          "type": "textInput",
          "isRequired": false,
          "limits": {"min": 0.4, "max": 3.0},
        },
        {
          "label": "ИК",
          "name": "artificialCirculation",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
        {
          "label": "Время ИК",
          "name": "artificialCirculationTime",
          "type": "textInput",
          "isRequired": false,
          "limits": {"min": 0.0, "max": 150},
        },
        {
          "label": "Время пережатия аорты",
          "name": "aorticConstrictionTime",
          "type": "textInput",
          "isRequired": false,
          "limits": {"min": 0.0, "max": 150},
        },
        {
          "label": "T-тела",
          "name": "bodyTemperature",
          "type": "textInput",
          "isRequired": false,
          "limits": {"min": 0.0, "max": 47.0},
        },
        {
          "label": "Количество кардиоплегий",
          "name": "cardioplegiaNumber",
          "type": "doubleSelection",
          "values": ["0-2", "3-4"],
          "isRequired": false,
          "enum": {"0-2": "0-2", "3-4": "3-4"}
        },
        {
          "label": "ВП ЛЖ",
          "name": "ventriculoplastLV",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
        {
          "label": "Индекс реваскуляризации",
          "name": "revascularizationIdx",
          "type": "doubleSelection",
          "values": ["2-3", "4-5"],
          "isRequired": false,
          "enum": {"2-3": "2-3", "4-5": "4-5"}
        },
        {
          "label": "Y-образное КШ",
          "name": "yCoronaryBypass",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
        {
          "label": "Выделение ЛВГА",
          "name": "litaDischarge",
          "type": "doubleSelection",
          "values": ["Скелет", "Лоскут" ],
          "isRequired": false,
          "enum": {"skeleton": "Скелет", "flap": "Лоскут"}
        },
        {
          "label": "Выделение ПВГА",
          "name": "ritaDischarge",
          "type": "tripleSelection",
          "values": ["Скелет", "Лоскут", "Нет"],
          "isRequired": false,
          "enum": {"skeleton": "Скелет", "flap": "Лоскут", "no": "Нет"}
        },
        {
          "label": "Использование ЛА",
          "name": "radialArteryUsage",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
        {
          "label": "Использование АВ",
          "name": "poplitealArteryUsage",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
        {
          "label": "Кровопотеря",
          "name": "bloodLoss",
          "type": "textInput",
          "isRequired": false,
          "limits": {"min": 400.0, "max": 2000.0},
        },
        {
          "label": "Время ИВЛ",
          "name": "artificialVentTime",
          "type": "textInput",
          "isRequired": false,
          "limits": {"min": 0.0, "max": 2000.0},
        },
        {
          "label": "Инотропная поддержка",
          "name": "inotropicSupport",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
        {
          "label": "Пневмония",
          "name": "pneumonia",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
        {
          "label": "СН",
          "name": "heartFailure",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
        {
          "label": "ФП/ТП",
          "name": "reanimationAtrialFibrillation",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
        {
          "label": "Плевральный выпот",
          "name": "pleuralEffusion",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
        {
          "label": "Гидроперикард",
          "name": "hydropericardium",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
        {
          "label": "Пневмоторакс",
          "name": "pneumothorax",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
        {
          "label": "Стернальные осложнения",
          "name": "sternalComplications",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
        {
          "label": "АКК",
          "name": "calciumChannelAntagonists",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
        {
          "label": "иАПФ",
          "name": "angiotensinInhibitors",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
        {
          "label": "Спиронолактон",
          "name": "spironolactone",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
        {
          "label": "Диуретики",
          "name": "diuretics",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
        {
          "label": "Кордарон",
          "name": "cordarone",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
        {
          "label": "Продолжительность госпитализации",
          "name": "hospitalizationDuration",
          "type": "textInput",
          "isRequired": false,
          "limits": {"min": 0.0, "max": 60.0},
        },
        {
          "label": "КЭЭ",
          "name": "carotidEndarterectomy",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
        {
          "label": "Операции на АНК",
          "name": "lowerLimbSurgery",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
        {
          "label": "Антиагреганты",
          "name": "antiaggregants",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
        {
          "label": "Антикоагулянты",
          "name": "anticoagulants",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
        {
          "label": "БАБ",
          "name": "betaAB",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
        {
          "label": "АКК",
          "name": "postCalciumChannelAntagonists",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
        {
          "label": "иАПФ",
          "name": "postAngiotensinInhibitors",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
        {
          "label": "АРА",
          "name": "angiotensinAntagonists",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
        {
          "label": "Диуретики",
          "name": "postDiuretics",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
        {
          "label": "Статины",
          "name": "statins",
          "type": "doubleSelection",
          "values": ["Есть", "Нет"],
          "isRequired": false,
          "enum": {1: "Есть", 0: "Нет"}
        },
      ]
    }
  ]
}

export {usersAnswer, patientsAnswer, cabsParametersAnswer, schemasAnswer, patientsCovid, patientsCabs }