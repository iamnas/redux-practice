
export default function reducer (state=0,action){
    switch (action.type) {
        case 'deposit':
          return state + 100
        case 'withdraw':
          return state - 100
        default:
          return state
      }
}

// export default reducer