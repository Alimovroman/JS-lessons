import React from 'react';
import CurrencyExchange from '../../components/CurrencyExchange/CurrencyExchange';
import { CurrencyType} from '../../redux/currencyReducer';
import {Dispatch} from 'redux';
import {
    ChangeActionAC,
    ChangeCurrencyFieldAC,
    СhangeCurrentCurrencyAC,
} from '../../redux/actions';
import {connect, ConnectedProps, useDispatch, useSelector} from 'react-redux';
import {IGlobalState} from "../../redux/state";

const CurrencyEContainer: React.FC<TProps> = props => {

    const {
        setCurrencyAmount,
        setAction,
        changeCurrency,
    } = props;

    const {currencies,
        currentCurrency,
        isBuying,
        amountOfBYN,
        amountOfCurrency} = useSelector((state: IGlobalState) => state.currency)
    const dispatch = useDispatch<Dispatch>()

    let currencyRate: number = 0;
    const currenciesName = currencies.map((currency: CurrencyType) => {
        if (currency.currencyName === currentCurrency) {
            currencyRate = isBuying ? currency.buyRate : currency.sellRate;
        }
        return currency.currencyName;
    });

    const changeCurrencyField = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value;
        if (!isFinite(+value)) return;
        if (e.currentTarget.dataset.currency) {
            const trigger: string = e.currentTarget.dataset.currency;
            if (trigger === 'byn') {
                if (value === '') {
                    dispatch(setCurrencyAmount(value, value));
                } else {
                    dispatch(setCurrencyAmount(value, (+Number(value).toFixed(2) / currencyRate).toFixed(2)));
                }
            } else {
                if (value === '') {
                    dispatch(setCurrencyAmount(value, value));
                } else {
                    dispatch(setCurrencyAmount((+Number(value).toFixed(2) * currencyRate).toFixed(2), value));
                }
            }
        }
    };
    const changeAction = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.currentTarget.dataset.action === 'buy' ? dispatch(setAction(true)) : dispatch(setAction(false));
    };

    const changeCurrentCurrency = (e: React.MouseEvent<HTMLLIElement>) => {
        e.currentTarget.dataset.currency && dispatch(changeCurrency(e.currentTarget.dataset.currency));
    };

    return (
        <React.Fragment>
            <CurrencyExchange
                currenciesName={currenciesName}
                currentCurrency={currentCurrency}
                currencyRate={currencyRate}
                isBuying={isBuying}
                amountOfBYN={amountOfBYN}
                amountOfCurrency={amountOfCurrency}
                changeCurrencyField={changeCurrencyField}
                changeAction={changeAction}
                changeCurrentCurrency={changeCurrentCurrency}
            />
        </React.Fragment>
    );
};

// const mapStateToProps = ({currency}: { currency: CurrencyState }): CurrencyState => {
//     return {
//         currencies: currency.currencies,
//         currentCurrency: currency.currentCurrency,
//         isBuying: currency.isBuying,
//         amountOfBYN: currency.amountOfBYN,
//         amountOfCurrency: currency.amountOfCurrency,
//     };
// };

const connector = connect(null, {
    setCurrencyAmount: ChangeCurrencyFieldAC,
    setAction: ChangeActionAC,
    changeCurrency: СhangeCurrentCurrencyAC
});

type TProps = ConnectedProps<typeof connector>;

export default connector(CurrencyEContainer);

