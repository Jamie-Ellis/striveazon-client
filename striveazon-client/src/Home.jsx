import NavBar from './components/MyNav'
import LatestRelease from './components/Products'

class Home extends React.Component {
    state= {
        isLoading: false,
    }
    render() {
       return (
           <>
        <NavBar />
        <LatestRelease />
        </>
      )
       }
    }
export default Home