import React, { Component } from 'react'
import { Redirect } from "react-router-dom"
import { connect } from 'react-redux'
import { getSongs } from '../../actions/songs/action'
import { BACKEND_URL } from '../../config'
const axios = require('axios')
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
let song
class EditSong extends Component {
    state = {
        redirectMain : false,
        artist: "",
        genre: "",
        year : 0,
        title : "",
        durationMin : 0,
        durationSec : 0,
        contents : ""
    }

    async componentDidMount() {
        const { id } = this.props.match.params
        const songRec = await axios.get(BACKEND_URL + "get/" + id)
        song = songRec.data.song
        this.setState({artist: song.artist, genre: song.genre, year: song.year, title: song.title,
             durationMin: song.durationMin, durationSec: song.durationSec, contents: song.contents})
    }


    onChange = e => this.setState({ [e.target.name]: e.target.value })    

    onSubmitUpdateUser = e => {
        e.preventDefault()
        const { artist, genre, year, title, durationMin, durationSec, contents } = this.state
        const { id } = this.props.match.params        

        const updatedSong = {
            artist: artist,
            genre: genre,
            year : year,
            title : title,
            durationMin : durationMin,
            durationSec : durationSec,
            contents : contents
        }

        const pathServer = BACKEND_URL + "update/" + id
     
        axios.put(
            pathServer,
            updatedSong
        )
        .then(res => {
            this.setState({redirectMain: true})
        })
        .catch (err =>console.log(err))

        this.props.getSongs()
      }    

    render() {
        const { artist, genre, year, title, durationMin, durationSec, contents } = this.state
        const { id } = this.props.location.state
        if (this.state.redirectMain) {
            return <Redirect to={{
              pathname: '/',
              state: {
              }
            }}
            />
          }

        const forRender = (<>
            <Row>
                <Col sm={{ span: 10, offset: 1 }}>
                    <b>Artist:</b>
                </Col>
            </Row>
            <Row>
                <Col sm={{ span: 10, offset: 1 }}>
                    <div style={{ marginBottom: 5 }} className="input-group">
                        <input type="text" onChange={this.onChange} name="artist" value={artist} placeholder={artist} />
                    </div>
                </Col>
            </Row>

            <Row>
                <Col sm={{ span: 10, offset: 1 }}>
                    <b>Genre:</b>
                </Col>
            </Row>
            <Row>
                <Col sm={{ span: 10, offset: 1 }}>
                    <div style={{ marginBottom: 5 }} className="input-group">
                        <input type="text" onChange={this.onChange} name="genre" value={genre} placeholder={genre} />
                    </div>
                </Col>
            </Row>

            <Row>
                <Col sm={{ span: 10, offset: 1 }}>
                    <b>Year:</b>
                </Col>
            </Row>
            <Row>
                <Col sm={{ span: 10, offset: 1 }}>
                    <div style={{ marginBottom: 5 }} className="input-group">
                        <input type="text" onChange={this.onChange} name="year" value={year} placeholder={year} />
                    </div>
                </Col>
            </Row>            

            <Row>
                <Col sm={{ span: 10, offset: 1 }}>
                    <b>Title:</b>
                </Col>
            </Row>
            <Row>
                <Col sm={{ span: 10, offset: 1 }}>
                    <div style={{ marginBottom: 5 }} className="input-group">
                        <input type="text" onChange={this.onChange} name="title" value={title} placeholder={title} />

                    </div>
                </Col>
            </Row>


            <Row>
                <Col sm={{ span: 10, offset: 1 }}>
                    <b>Duration min:</b>
                </Col>
            </Row>
            <Row>
                <Col sm={{ span: 10, offset: 1 }}>
                    <div style={{ marginBottom: 5 }} className="input-group">
                        <input type="text" onChange={this.onChange} name="durationMin" value={durationMin} placeholder={durationMin} />
                    </div>
                </Col>
            </Row>            

            <Row>
                <Col sm={{ span: 10, offset: 1 }}>
                    <b>Duration sec:</b>
                </Col>
            </Row>
            <Row>
                <Col sm={{ span: 10, offset: 1 }}>
                    <div style={{ marginBottom: 5 }} className="input-group">
                        <input type="text" onChange={this.onChange} name="durationSec" value={durationSec} placeholder={durationSec} />
                    </div>
                </Col>
            </Row>                        

            <Row>
                <Col sm={{ span: 10, offset: 1 }}>
                    <b>Text:</b>
                </Col>
            </Row>
            <Row>
                <Col sm={{ span: 10, offset: 1 }}>
                    <div style={{ marginBottom: 5 }} >
                        <textarea rows="50" cols="50" type="text"  onChange={this.onChange} name="contents" value={contents} placeholder={contents} />
                    </div>
                </Col>
            </Row>


            <Row>
            <Col sm={{ offset: 2 }}>
                <input  type="submit" value="Confirm" className="btn btn-primary" onClick={this.onSubmitUpdateUser} />
                </Col>
            </Row>
        </>)



        return (<>
            {forRender} </>
        )
    }
}


export default connect(null, { getSongs })(EditSong)


