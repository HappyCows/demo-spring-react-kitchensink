import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import RoleBadge from "main/components/Profile/RoleBadge";
import { useCurrentUser } from "main/utils/user";
import BasicLayout from "main/layouts/BasicLayout/BasicLayout";

import ReactJson from "react-json-view";
const ProfilePage = () => {

    const { data: currentUser } = useCurrentUser();

    if (!currentUser.loggedIn) {
        return (
            <p>Not logged in.</p>
        )
    }

    const { email, pictureUrl, fullName } = currentUser.user;

    const role = (currentUser.user.member ? "member" : "guest");

    return (
        <BasicLayout>
            <Row className="align-items-center profile-header mb-5 text-center text-md-left">
                <Col md={2}>
                    <img
                        src={pictureUrl}
                        alt="Profile"
                        className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
                    />
                </Col>
                <Col md>
                    <h2>{fullName}</h2>
                    <p className="lead text-muted">{email}</p>
                    <RoleBadge role={role} />
                </Col>
            </Row>
            <Row className="text-left">
                <ReactJson src={currentUser.user} />
            </Row>
        </BasicLayout>
    );
};

export default ProfilePage;