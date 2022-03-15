import { Link } from "react-router-dom";
import BannerCom from "../common/BannerCom";
import Footer from "../common/Footer";
import Footer2 from "../common/Footer2";
import Header from "../common/header";
import { RecentCollections } from "../Home/home";
import './products.css';
import { useNavigate } from 'react-router-dom';
import Buttons from "../common/button";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import Axios from "axios";
import Card from 'react-bootstrap/Card';
import parse from "html-react-parser";
export default function Products() {
    const [items, setItems] = useState([]);

    const fetchProducts = async () => {
        const { data } = await Axios.post(
            "http://localhost:3600/getallProducts"
        );
        const items = data;
        setItems(items);
        items.map(item => {
            console.log(item.date)
        })
        console.log(items);
    };

    useEffect(() => {
        fetchProducts();
    }, []);
    return (
        <>
            <Footer />
            <Header />
            <BannerCom />
            {/* <Products /> */}
            <Contents items={items} />
            <Footer2 />
        </>
    )
}

const Contents = (props) => {
    const navigate = useNavigate();
    const add = () => {
        navigate('/dataEntry')
        console.log('clicked')
    }
    var content =
        <>
            {
                props.items?.map(data => {
                    return (
                        <Col sm={3}>
                            <Card key={data.name}>
                                <Card.Body>
                                    <Card.Img src={data.imgUrl}/>
                                    <Card.Title>{parse(data.name)}</Card.Title>
                                    {/* <Card.Subtitle className="mb-2 text-muted">{data.name}</Card.Subtitle>
                                    <Card.Text>
                                        {parse(data.name)}
                                    </Card.Text> */}
                                    {/* <Card.Link href={data.name}>View More</Card.Link> */}
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })
            }
        </>


    return (
        <>
            <Container>
                <Row>
                    {content}
                </Row>
            </Container>
            <div className="submit_btn text-center">
                <Buttons type={"submit"} handleSubmit={add} text={"Add Products"} />
            </div>
        </>
    )
}