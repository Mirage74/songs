import React, { Component } from 'react'
import { BACKEND_URL, SHOW_ALL } from '../config'
import { connect } from 'react-redux'
import { getSongs, setFilterArtist, setFilterGenre, setFilterYear } from '../actions/songs/action'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SongList from "./layout/songlist"
import Filters from "./layout/filters"
import PlusMinus from "./layout/plusminus"
import AddSong from "./layout/addsong"
const axios = require('axios')
import "./mainpage.css"

class Mainpage extends Component {

    state = {
        filterArtistName: "",
        filterGenre: "",
        filterYear: 0,
        addExpended: false,
        fArtist : "",
        fGenre : "",
        fYear : "",
        fTitle: "",
        fDurMin: "",
        fDurSec: "",
        fContent: ""
    }

    async componentDidMount() {
        await this.props.getSongs()
    }

    onPlusMinusClick = e => {
        e.preventDefault()
        this.setState({ addExpended: !this.state.addExpended })
    }


    onChange = e => this.setState({ [e.target.name]: e.target.value })

    onChangeFilter = e => {
        e.preventDefault()
        const { setFilterArtist, setFilterGenre, setFilterYear} = this.props        
        let filterArtistName = ""
        let filterGenre = ""
        let filterYear = 0
        if (e.target.name === "filterArtistName") {
            filterArtistName = e.target.value
        }
        if (e.target.name === "filterGenre") {
            filterGenre = e.target.value
        }
        if (e.target.name === "filterYear") {
            filterYear = e.target.value
        }                
        if (filterArtistName.length > 0)  {
            setFilterArtist(filterArtistName)
        }
        if (filterGenre.length > 0)  {
            setFilterGenre(filterGenre)
        }
        if ( (filterYear > 0) || ("" + filterYear === SHOW_ALL) ) {
            setFilterYear(filterYear)
        }
        this.setState({ [e.target.name]: e.target.value })
    }
    
    addSong = async (newSong) => {
        const { filterArtistName, filterGenre, filterYear } = this.state
        const { setFilterArtist, setFilterGenre, setFilterYear} = this.props        

        let res = await axios.post(BACKEND_URL + 'create', newSong)
            .catch(err => { console.log("error creating new newSong, Action : ", err) })
        this.props.getSongs()
        if (filterArtistName.length > 0)  {
            setFilterArtist(filterArtistName)
        }
        if (filterGenre.length > 0)  {
            setFilterGenre(filterGenre)
        }
        if ( (filterYear > 0) || ("" + filterYear === SHOW_ALL) ) {
            setFilterYear(filterYear)
        }                                
        return res.data
    }

    handleSubmit = async (e) => {
        const { fArtist, fGenre, fYear, fTitle, fDurMin, fDurSec, fContent } = this.state        
        e.preventDefault()

      
        let Song = {
            artist: fArtist,
            genre: fGenre,
            year : fYear,
            title : fTitle,
            durationMin : fDurMin,
            durationSec : fDurSec,
            contents : fContent
        }
        let res = await this.addSong(Song)
        .then (res => {
            this.setState({fArtist : "", fGenre : "", fYear : "", fTitle : "", fDurMin : "", fDurSec : "", fContent : ""})
        })
    }
    
    render() {
        const { currList, filteredList } = this.props
        const { filterArtistName, filterGenre, filterYear, addExpended, fArtist, fGenre, fYear, fTitle, fDurMin, fDurSec, fContent } = this.state

        let leftCol, rightCol, addForm
        if (addExpended) {
            addForm = (<AddSong onChangeCB={this.onChange} handleSubmitCB={this.handleSubmit}
                fArtist={fArtist} fGenre={fGenre} fYear={fYear} fTitle={fTitle} fDurMin={fDurMin} fDurSec={fDurSec} fContent={fContent}/>)
        } else {
            addForm = (<></>)
        }
        

        leftCol = (<>
            <SongList songList={filteredList} />
        </>)

        rightCol = (<>
            <Filters onChange={this.onChangeFilter} songsList={filteredList} filterArtistName={filterArtistName} filterGenre={filterGenre} filterYear={filterYear} />
            <br/>
            <PlusMinus expended={addExpended} onPlusMinusClick={this.onPlusMinusClick} />
            {addForm}
        </>)


        return (
            <div>
                <Row>
                    <Col sm={{ span: 8, offset: 1 }} > {leftCol} </Col>
                    <Col sm={{ span: 3, offset: 0 }}> {rightCol} </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currList: state.songs.currList,
    filteredList: state.songs.filteredList
})

export default connect(mapStateToProps, { getSongs, setFilterArtist, setFilterGenre, setFilterYear})(Mainpage)


