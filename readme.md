# Baekjoon Re-Solver 🔁

Chrome 확장 프로그램으로, [백준 온라인 저지](https://www.acmicpc.net)에서 **"다시 풀고 싶은 문제"**를 저장하고 관리할 수 있게 도와줍니다.

## 🔧 주요 기능

- 문제 페이지에 **"다시 풀기"** 버튼 자동 삽입
- 버튼 클릭 시 해당 문제를 저장하거나 제거 가능
- 저장된 문제는 확장 프로그램 팝업에서 리스트 형태로 확인 가능
- 클릭 시 백준 문제 페이지로 바로 이동
- 저장한 날짜/시간도 함께 표시

## 📦 설치 방법

1. 이 저장소를 다운로드하거나 ZIP으로 압축 해제
2. Chrome 브라우저에서 `chrome://extensions/` 이동
3. **우측 상단의 '개발자 모드' 활성화**
4. **'압축해제된 확장 프로그램을 로드' 클릭 후 `extension_solve` 폴더 선택**

## 📸 스크린샷

> 💡 스크린샷을 여기에 추가하세요!

## 📁 폴더 구조

```bash
extension_solve/
├── content.js # 문제 페이지에 버튼 삽입 및 저장 처리
├── content.css # 버튼 스타일
├── manifest.json # 확장 정보 및 권한 정의
├── popup.html # 확장 팝업 UI
├── popup.js # 저장된 문제 리스트 표시
├── popup.css # 팝업 스타일
```

## ✅ 사용 예시

- "다시 풀기" 버튼을 누르면 문제가 저장됩니다.
- 다시 한 번 누르면 저장에서 제거됩니다.
- 팝업에서 저장한 문제 목록을 확인하고 클릭하여 바로 이동할 수 있습니다.

---

즐거운 코딩 되세요! 🎉
