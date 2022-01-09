const RINKEVI = Symbol('RINKEVI');

export const networks = {
    [RINKEVI]: {
        symbol: 'ETH',
        name: 'Red de prueba Rinkeby',
        chainId: '0x89',
    }
}

export const currentNetwork = networks[RINKEVI];

