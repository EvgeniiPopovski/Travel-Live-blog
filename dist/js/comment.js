const commentNumber = document.querySelector('.comments_counter');

const mainContainer = document.querySelector('.comments__wrapper');
// INPUTS

const nameInput = document.querySelector('.comment__form_input');
const textInput = document.querySelector('.comment__form_textarea');
const btnForm = document.querySelector('.comment__form_submit');
const formComment = document.querySelector('.comment_form');





function stopSubmit (e) {
    e.preventDefault()
    if (nameInput.value && textInput.value) {
        appendComment(nameInput.value , textInput.value)
    }
    let comments = document.querySelectorAll('.comment__container');
    commentNumber.textContent = comments.length
}

function appendComment (personName, commentMessage) {
    
    const commentContainer = document.createElement('div');
    commentContainer.classList.add('comment__container');

    const commentAvatar = document.createElement('div');
    commentAvatar.classList.add('comment__avatar');

    const commentAvatarPict = document.createElement('img');
    commentAvatarPict.classList.add('comment__avatar_pict');
    commentAvatarPict.setAttribute( 'src','./img/postFeature/postAutorAvatar/avatarCommnet.webp')
    
    const commentContent = document.createElement('div');
    commentContent.classList.add('comment__content');

    const contentTitle = document.createElement('div');
    contentTitle.classList.add('comment__content_title');
    contentTitle.textContent = personName;

    const contentDate = document.createElement('div');
    contentDate.classList.add('comment__content_date');
    contentDate.textContent = '15, Aug 2018, 24:00';

    const contentText = document.createElement('div');
    contentText.classList.add('comment__content_text');
    contentText.textContent = commentMessage;



    commentAvatar.appendChild(commentAvatarPict)

    commentContent.appendChild(contentTitle);
    commentContent.appendChild(contentDate);
    commentContent.appendChild(contentText);

    commentContainer.appendChild(commentAvatar);
    commentContainer.appendChild(commentContent);


    mainContainer.appendChild(commentContainer);

    
    nameInput.value = '';
    textInput.value = '';
}




formComment.addEventListener('submit', stopSubmit)

