import {
  removeChildren,
} from '../../dom-utils.js';

class BrowseMembersView {
  constructor() {
    this.rootEl = document.querySelector('#container');
  }

  clearDom() {
    removeChildren(this.rootEl);
  }

  render(props) {
    const {
      currentMemberIndex,
      handleBrowseNextMember,
      membersList,
    } = props;

    const {
      name,
      thumbnailUrl,
      quote,
    } = membersList[currentMemberIndex];

    this.clearDom();

    const memberProfile = document.createElement('div');
    memberProfile.className = 'member-profile';

    const memberImageBox = document.createElement('div');
    memberImageBox.className = 'member-image-box';

    const memberImage = document.createElement('img');
    memberImage.setAttribute('src', thumbnailUrl);
    memberImage.setAttribute('alt', '(会員のイメージ)');

    memberImageBox.appendChild(memberImage);

    const h3First = document.createElement('h3');
    h3First.textContent = '名前';

    const memberName = document.createElement('p');
    memberName.className = 'member-name';
    memberName.textContent = name;

    const h3Second = document.createElement('h3');
    h3Second.textContent = '一言';

    const memberText = document.createElement('p');
    memberText.className = 'member-text';
    memberText.textContent = quote;

    const button = document.createElement('button');
    button.className = 'btn-next-member';
    button.textContent = '次へ';
    button.onclick = handleBrowseNextMember;

    memberProfile.appendChild(memberImageBox);
    memberProfile.appendChild(h3First);
    memberProfile.appendChild(memberName);
    memberProfile.appendChild(h3Second);
    memberProfile.appendChild(memberText);

    const container = document.querySelector('#container');
    container.appendChild(memberProfile);
    container.appendChild(button);

    /*
      TODO: 動的にDOM要素を作成して、
      "#container"というidを持つDIV要素の子要素として追加してください...

        <div class="member-profile">
          <div class="member-image-box">
            <img src="" alt="(会員のイメージ)">
          </div>
          <h3>名前</h3>
          <p class="member-name">
            <!-- 会員の名前、たとえば「じじー」-->
          </p>
          <h3>一言</h3>
          <p class="member-text">
            <!-- 会員の自己紹介 -->
          </p>
        </div>
        <button class="btn-next-member">次へ</button>
    */
  }
}

export default BrowseMembersView;
