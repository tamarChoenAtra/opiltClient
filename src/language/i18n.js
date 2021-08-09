import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';

i18n.use(reactI18nextModule).init({
    resources: {
        he: {
            createUserParking: {
                title: 'הכנס את פרטי הרכב שלך',
                firstName: 'שם פרטי',
                lastName: 'שם משפחה',
                carKind: 'סוג הרכב',
                carNumber: 'מספר הרכב',
                carParking: 'מספר החנייה',
                floor: 'קומה',
                addParking: 'הוספת חנייה',
                noCar: 'אין לי רכב , יש לי רק חנייה',
                continue: 'המשך',
                addNewCar: 'הוספת רכב נוסף'
            }
        },
        en: {
            createUserParking: {
                title: 'Enter your car details',
                firstName: 'first name',
                lastName: 'last name',
                carKind: 'car kind',
                carNumber: 'car number',
                carParking: 'number parking',
                floor: 'floor',
                addParking: 'add a new parking',
                noCar: 'I dont have car, i just have parking',
                continue: 'continue',
                addNewCar: 'add a new car'
            }
        }
    },
    //language to use if translations in user language are not available
    fallbackLng: "en",
    interpolation: {
        escapeValue: false, // not needed for react!!
    }
});

export default i18n;