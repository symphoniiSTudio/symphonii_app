import { TimestampDate} from 'timestamp-date';


const coverter = new TimestampDate();

export const formatNumber = (num) => {
    const n = new Intl.NumberFormat(undefined, {
        maximumFractionDigits: 2,
    });

    return n.format(num);
}

export const timestampConverter = coverter;
export const timeStamptoDate = (data) => {
    return coverter.parseTimestampToDate(data);
}