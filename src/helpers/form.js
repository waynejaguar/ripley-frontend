export const formatRut = (paramrut) => {
    const actual = (paramrut) ? paramrut.toString().replace(/^0+/, '') : '';
    const withoutPoints = actual.replace(/\./g, '') || '';
    const actualClean = withoutPoints.replace(/-/g, '') || '';
    if (actualClean !== '' && actualClean.length > 1) {
        const start = actualClean.substring(0, actualClean.length - 1);
        let rut = '';
        let i = 0;
        let j = 1;
        for (i = start.length - 1; i >= 0; i--) { // eslint-disable-line no-plusplus
            const letter = start.charAt(i);
            rut = letter + rut;
            if (j % 3 === 0 && j <= start.length - 1) {
                rut = `.${rut}`;
            }
            j++; // eslint-disable-line no-plusplus
        }
        const dv = actualClean.substring(actualClean.length - 1);
        rut = `${rut}-${dv}`;
        return rut.toUpperCase();
    }
    return actualClean.toUpperCase();
};

export const cleanRut = (paramrut) => `${paramrut}`
    .toString().replace(/[^0-9kK]+/g, '').toUpperCase();