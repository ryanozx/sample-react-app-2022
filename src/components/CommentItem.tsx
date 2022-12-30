import Comment from '../types/Comment';

import React from 'react';
import { Card, CardContent, makeStyles, Typography } from '@mui/material';

type Props = {
    comment: Comment;
    styled: boolean;
};

/*const useStyles = makeStyles({
    commentBody: {
        fontSize: 16,
        whiteSpace: 'pre-wrap',
        paddingBottom: '1em',
    },
    commentCard: {
        marginBottom: '1em',
    },
    metadata: {
        fontSize: 14,
    },
});*/

const CommentItem: React.FC<Props> = ({ comment, styled }) => {
    if (styled) {
        return (
            <Card>
                <CardContent>
                    <Typography variant="body2" color="textPrimary" component="p">
                        {comment.body}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        {'Posted by ' + comment.author + ' on ' + comment.timestamp.toLocaleString()}
                    </Typography>
                </CardContent>
            </Card>
        );
    }

    // unstyled
    return (
        <li>
            {comment.body}
            <br />
            <em>{'posted by ' + comment.author + ' on ' + comment.timestamp.toLocaleString()}</em>
        </li>
    );
};

export default CommentItem;
