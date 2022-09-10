import React from "react";
import "./Content.css";
import profile from "../profile/profile.png";
import { Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import AddLocationIcon from "@mui/icons-material/AddLocation";

const Content = () => {
  return (
    <Grid
      container
      rowSpacing={2}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      className="Content_main"
    >
      <Grid item xs={5.9} className="Content_submain1">
        <Grid className="Content_grid1">
          <div className="Content_profil">
            <img src={profile} alt="Profile picture" />
          </div>
          <Grid className="Content_about">
            <Typography className="Content_typo1" variant="h3" component="h3">
              ABOUT
            </Typography>
            <Typography className="Content_typo2" variant="p" component="p">
              A meticulous and organized individual seeking an Entry-level
              position in the field of Project Management. Skilled at developing
              reports, analyzing data, and identifying solutions. Strong ability
              to handle complex projects. Innovative, creative, and willing to
              contribute ideas and learn new things
            </Typography>
            <Divider className="Content_divider" />
          </Grid>
          <div className="Content_contact">
            <Typography className="Content_typo1" variant="h3" component="h3">
              CONTACT
            </Typography>
            <Typography className="Content_typo2" variant="p" component="p">
              <SmartphoneIcon />
              +91-9726113561
            </Typography>
            <Typography className="Content_typo2" variant="p" component="p">
              <EmailIcon />
              Example@gmail.com
            </Typography>
            <Typography className="Content_typo2" variant="p" component="p">
              <LanguageIcon />
              www.example.com
            </Typography>
            <Typography className="Content_typo2" variant="p" component="p">
              <AddLocationIcon />
              123 Street Name, City Name, State, Country, 12345
            </Typography>
            <Divider className="Content_divider" />
          </div>
          <div className="Content_skill">
            <Typography className="Content_typo1" variant="h3" component="h3">
              SKILL
            </Typography>
            <Typography className="Content_typo2" variant="p" component="p">
              <ul className="a">
                <li>Lorem Epsome Doler</li>
                <li>Lorem Epsome Doler</li>
                <li>Lorem Epsome Doler</li>
                <li>Lorem Epsome Doler</li>
                <li>Lorem Epsome Doler</li>
              </ul>
            </Typography>
          </div>
        </Grid>
      </Grid>

      <Divider
        className="Content_grid_divider"
        orientation="vertical"
        variant="middle"
        flexItem
      />

      <Grid item xs={5.9} className="Content_submain2">
        <Grid className="Content_grid2">
          <Grid>
            <Typography className="Content_typo1" variant="h3" component="h3">
              EDUCATION
            </Typography>
            <Grid className="Content_Education">
              <Typography variant="p" component="p">
                2017-2018
              </Typography>
              <Typography variant="p" component="p">
                <ul className="b">
                  <strong>
                    <li>CERTIFICATE</li>
                  </strong>
                </ul>
              </Typography>
              <Typography variant="p" component="p">
                UNIVERSITY NAME
              </Typography>
            </Grid>
            <Grid className="Content_Education">
              <Typography variant="p" component="p">
                2014-2017
              </Typography>
              <Typography variant="p" component="p">
                <ul className="b">
                  <strong>
                    <li>BACHLORES DEGREE</li>
                  </strong>
                </ul>
              </Typography>
              <Typography variant="p" component="p">
                UNIVERSITY NAME
              </Typography>
            </Grid>
            <Divider className="Content_divider" />
          </Grid>
          <Grid>
            <Typography className="Content_typo1" variant="h3" component="h3">
              EXPERIENCE
            </Typography>
            <Grid className="Content_experience">
              <Typography variant="p" component="p">
                <ul className="c">
                  <strong>
                    <li>BACHLORES DEGREE</li>
                  </strong>
                </ul>
              </Typography>
              <Typography className="Typography_p" variant="p" component="p">
                UNIVERSITY NAME
              </Typography>
              <Typography className="Typography_p" variant="p" component="p">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Typography>
              <Typography variant="p" component="p">
                <ul className="c">
                  <strong>
                    <li>BACHLORES DEGREE</li>
                  </strong>
                </ul>
              </Typography>
              <Typography className="Typography_p" variant="p" component="p">
                UNIVERSITY NAME
              </Typography>
              <Typography className="Typography_p" variant="p" component="p">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Typography>
              <Typography variant="p" component="p">
                <ul className="c">
                  <strong>
                    <li>BACHLORES DEGREE</li>
                  </strong>
                </ul>
              </Typography>
              <Typography className="Typography_p" variant="p" component="p">
                UNIVERSITY NAME
              </Typography>
              <Typography className="Typography_p" variant="p" component="p">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Content;
