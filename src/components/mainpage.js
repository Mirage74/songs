import React, { Component } from 'react'
import { BACKEND_URL } from '../config'
import { connect } from 'react-redux'
import { getSongs } from '../actions/songs/action'
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
        const { currList } = this.props
        await this.props.getSongs()
        if (currList.length > 0) {
            this.setState({ filterArtistName: currList[0][1] })
            this.setState({ filterGenre: currList[0][2] })
            this.setState({ filterYear: currList[0][3] })
        }
    }

    onPlusMinusClick = e => {
        e.preventDefault()
        this.setState({ addExpended: !this.state.addExpended })
    }


    onChange = e => this.setState({ [e.target.name]: e.target.value })
    
    addSong = async (newSong) => {
        console.log("BACKEND_URL +", BACKEND_URL + 'create')
        console.log("newSong", newSong)
        let res = await axios.post(BACKEND_URL + 'create', newSong)
            .catch(err => { console.log("error creating new newSong, Action : ", err) })
        this.props.getSongs()
        console.log("res", res.data)
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
    }
    
    render() {
        const { currList } = this.props
        const { filterArtistName, filterGenre, filterYear, addExpended, fArtist, fGenre, fYear, fTitle, fDurMin, fDurSec, fContent } = this.state

        let leftCol, rightCol, addForm
        if (addExpended) {
            addForm = (<AddSong onChangeCB={this.onChange} handleSubmitCB={this.handleSubmit}
                fArtist={fArtist} fGenre={fGenre} fYear={fYear} fTitle={fTitle} fDurMin={fDurMin} fDurSec={fDurSec} fContent={fContent}/>)
        } else {
            addForm = (<></>)
        }


        leftCol = (<>
            <SongList songList={currList} sortBy="0" />
        </>)

        rightCol = (<>
            <Filters onChange={this.onChange} songsList={currList} filterArtistName={filterArtistName} filterGenre={filterGenre} filterYear={filterYear} />
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
    currList: state.songs.currList
})

export default connect(mapStateToProps, { getSongs })(Mainpage)


