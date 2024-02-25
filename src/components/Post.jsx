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

  //armazena em tempo real tudo que é digitado dentro da textarea
  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR });
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true });

  function handleCreateNewComment(event) {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange(){
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
    
  }
  function deleteComment(commentToDelete) {
    const updatedComments = comments.filter(comment => comment !== commentToDelete);
    setComments(updatedComments);
    console.log('deletar');
  }
  function handleNewCommentInvalid(){
    event.target.setCustomValidity('Essse campo é obrigatório');

  }
  
  const isNewCommentEmpty = newCommentText.length === 0;
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
        value={newCommentText} onChange={handleNewCommentChange} 
        onInvalid={handleNewCommentInvalid}
        required
        />
        <footer>
        <button type="submit" disabled={isNewCommentEmpty}> publicar </button>
        </footer>
      </form>
      <div className={styles.commentList}>

        {comments.map(comment => {
          return <Comment content={comment} onDeleteComment={deleteComment} key={comment} />
        })}
      </div>
    </article>
  );
}
