//Ricevere una data e restituire formato corretto
import { fromDate } from  '../components/utils/dateUtils';


describe ('test formattazione date', ()=>{
    it('formattazione date', ()=>{
            const myDate = '2020-01-01T00:00:00.00Z';
            const formattDate = fromDate(myDate);
            expect(formattDate).toEqual('01/01/2020');
    })

    /*edge cases

    */

    it('data null', ()=>{
        const myDate = null;
        expect(() => fromDate(myDate)).toThrow();

    });

    it('invio data undefined', ()=>{
        const myDate = undefined;
        expect(() => fromDate(myDate)).toThrow();
    });

    it('inviare data non corretta', ()=>{
        const myDate = 'questa è una stringa!';
        expect(() => fromDate(myDate)).toThrow();
    });
});