# HR AI Agent Dev Process

`index.html`로 실행되는 정적 웹앱입니다. HR AI Agent 개발 프로세스, Agentic Workflow, Reasoning, Harness Engineering 관련 학습 자료를 브라우저에서 볼 수 있습니다.

## 로컬에서 보기

별도 빌드 과정이 없습니다. 아래 중 하나로 실행하면 됩니다.

```bash
# Python이 설치되어 있는 경우
python -m http.server 8000
```

브라우저에서 <http://localhost:8000> 접속.

또는 `index.html`을 직접 열어도 대부분 동작합니다.

## GitHub Pages 배포

1. GitHub 저장소를 생성합니다.
2. 이 폴더에서 아래 파일을 포함해 커밋/푸시합니다.
   - `index.html`
   - `style.css`
   - `app.js`
   - `data.js`
   - `.nojekyll`
   - `README.md`
3. GitHub 저장소의 **Settings → Pages**로 이동합니다.
4. **Source: Deploy from a branch**, **Branch: main**, **Folder: /root**를 선택합니다.
5. 배포 URL 예시: `https://<github-id>.github.io/<repository-name>/`

## 공개 저장소에 올리기 전 확인

`.gitignore`는 `node_modules/`, 작업 문서(`md/`, `plans/`), 산출물(`output/`, `output_v2/`), 로컬 이미지(`images/`)를 제외하도록 설정되어 있습니다.

이미지가 실제 앱에서 필요하면 `.gitignore`의 `images/` 줄을 삭제한 뒤 필요한 이미지만 커밋하세요.

## 구조

```text
index.html   # 앱 진입점
style.css    # 화면 스타일
app.js       # 라우팅, 렌더링, 모달, 복사 기능
data.js      # 화면에 표시되는 콘텐츠 데이터
```
