import React from "react";

//Bootstrap Elements
import Card from 'react-bootstrap/Card'

//Rating
import StarRating from '../components/user-rating';

// authentication
import { useAuth0 } from "@auth0/auth0-react";


export default function ProfileCard () {
    const { user } = useAuth0();
    const { name, picture } = user; 
    
    return(
    <>
        <Card className="profile border-0">
            <img src= { picture } alt={name} className="profCircle" />
            <Card.Body>
                <Card.Title>{ name }</Card.Title>
                <StarRating />
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
            </Card.Body>
        </Card>
    </>
    )
}