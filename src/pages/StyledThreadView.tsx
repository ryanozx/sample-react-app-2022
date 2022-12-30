import BasicCommentList, {initComments} from '../components/CommentList';
import { Button, Card, CardContent, CardActions, Typography, TextField} from '@mui/material';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

import React, { useState, useRef, useEffect } from 'react';

const StyledThreadView: React.FC = () => {
    const [comments, setComments] = useState(initComments);
    const [commentText, setCommentText] = useState("");
    const replyRef = React.createRef<HTMLInputElement>();

    return (
        <div style={{ width: '30vw', margin: 'auto' }}>
            {/* <Typography style={{ padding: '1em 0' }}>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .changeDelay(80)
                            .typeString("This is much better, isn't it?")
                            .pauseFor(1000)
                            .callFunction(showTips)
                            .start();
                    }}
                />
            </Typography>
            <Fade in={isShowTips} timeout={1000}>
                <Typography style={{ paddingBottom: '1em' }}>
                    {'Try looking at the '}
                    <a href="https://v4.mui.com/">{'Material UI'}</a>
                    {' docs to see what other components you can use!'}
                </Typography>
                </Fade> */}
            <Card>
                <CardContent>
                    <Typography component="p">{'Viewing thread:'}</Typography>
                    <Typography variant="h5" component="h5">
                        {'Inspirational Quotes'}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        {'by Aiken'}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {'"The best way to predict the future is to invent it."'}
                        <br />
                        {'- Alan Kay'}
                    </Typography>
                </CardContent>
            </Card>

            <BasicCommentList styled={true} comments={comments} />

            <Card variant="outlined">
                <CardContent>
                    <Typography component="p">{"Reply:"}</Typography>
                    <TextField
                        id="outlined-multiline-static"
                        fullWidth={true}
                        multiline
                        value={commentText}
                        onChange={e => setCommentText(e.target.value)}
                        placeholder="Type comment here"
                        variant="outlined"
                        margin="normal"
                        inputRef={replyRef}
                    />
                </CardContent>
                <CardActions style={{"justifyContent": "center", "padding": "0px 16px 16px 16px"}}>
                    <Button 
                        variant="contained" 
                        color="primary"
                        onClick={() => {
                            if (commentText !== "")
                            {
                                setCommentText("");
                                setComments([...comments,
                                {body: commentText,
                                author: "anonymous",
                                timestamp: new Date()}])
                            }
                            replyRef.current!.focus();
                        }}
                    >
                        {"Submit"}
                    </Button>
                </CardActions>
            </Card>
            <br />
            <Link to="/">
                <Button variant="contained" color="secondary">
                    {'Back to threads'}
                </Button>
            </Link>
        </div>
    );
};

export default StyledThreadView;
