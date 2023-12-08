import Header from './components/Header'
import Calendar from './components/Calendar'
import Description from './components/Description'
import './styles/main.css'

function App(): JSX.Element {
    return (
        <main>
            <Header />

            <Calendar />

            <Description />
        </main>
    )
}

export default App
