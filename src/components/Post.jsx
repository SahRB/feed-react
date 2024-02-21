import React, { useState } from 'react';
import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './avatar';
import { format, formatDistanceToNow, set } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([
    'Muito bacana!'
  ]);

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR });
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true });

  function handleCreateNewComment(event) {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange(){
    setNewCommentText(event.target.value);
    
  }
    function deleteComment(comment){

    }
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder={true} src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line ) => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea name="comment" placeholder="Deixe seu comentário" 
        value={newCommentText} onChange={handleNewCommentChange} />
        <footer>
          <button type="submit">Postar</button>
        </footer>
      </form>
      <div className={styles.commentList}>

        {comments.map(comment => {
          return <Comment key={comment} content={comment} 
                ondeleteComment={deleteComment}
          />;
        })}
      </div>
    </article>
  );
}
