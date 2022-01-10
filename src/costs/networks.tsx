const RINKEVI = Symbol('RINKEVI');

export const networks = {
    [RINKEVI]: {
        symbol: 'ETH',
        name: 'Red de prueba Rinkeby',
        chainId: '0x4',
    }
}

export const currentNetwork = networks[RINKEVI];

