
export interface Flight {
    id: number; // double (int: 2^54)
    from: string;
    to: string;
    date: string;   // ISO-Strings: 2018-12-24T17:00:00.000+01:00
}