import {render} from '@testing-library/react'
import App from '../App'
import {expect,describe,it} from 'vitest'
import {HashRouter} from 'react-router-dom'

const MockApp=()=>{
    return(
        <HashRouter>
            <App />
        </HashRouter>
    )
    
}

describe('App.jsx',()=>{
    it('a projekt létrejött',()=>{
        render(<MockApp/>)
        expect(document.getElementById('app')).toBeInTheDocument()
    })
})