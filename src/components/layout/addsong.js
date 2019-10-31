import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class AddSong extends Component {
    render() {
        const { onChangeCB, handleSubmitCB, fArtist, fGenre, fYear, fTitle, fDurMin, fDurSec, fContent } = this.props

        const forRender = (<>
            <Row>
                <Col sm={{ span: 10, offset: 1 }}>
                    <b>Artist:</b>
                </Col>
            </Row>
            <Row>
                <Col sm={{ span: 10, offset: 1 }}>
                    <div style={{ marginBottom: 5 }} className="input-group">
                        <input type="text" className="Artist" onChange={onChangeCB} name="fArtist" value={fArtist} placeholder="artist" />
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
                        <input type="text" className="Genre" onChange={onChangeCB} name="fGenre" value={fGenre} placeholder="genre" />
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
                        <input type="text" className="Year" onChange={onChangeCB} name="fYear" value={fYear} placeholder="year" />
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
                        <input type="text" className="Title" onChange={onChangeCB} name="fTitle" value={fTitle} placeholder="title" />
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
                        <input type="text" className="DMin" onChange={onChangeCB} name="fDurMin" value={fDurMin} placeholder="min" />
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
                        <input type="text" className="DSec" onChange={onChangeCB} name="fDurSec" value={fDurSec} placeholder="sec" />
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
                    <div style={{ marginBottom: 5 }} className="input-group">
                        <textarea rows="50" cols="30" type="text" className="Contens" onChange={onChangeCB} name="fContent" value={fContent} placeholder="text" />
                    </div>
                </Col>
            </Row>


            <Row>
            <Col sm={{ offset: 2 }}>
                <input type="submit" value="Add song" className="btn btn-primary" onClick={handleSubmitCB} />
                </Col>
            </Row>
        </>)



        return (<>
            {forRender} </>
        )
    }
}


export default AddSong

