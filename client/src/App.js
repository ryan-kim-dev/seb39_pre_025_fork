import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import Navbar from './components/Navbar';
import AddQuestion from './pages/Questions/AddQuestion';
import DeleteQuestion from './pages/MyPage/UserQuestionPage/DeleteQuestion';
import MyPage from './pages/MyPage/MyPage';
import Footer from './components/Footer';
import { BackgroundLayout, GlobalStyle } from './GlobalStyle';
import Questions from './pages/Questions/Questions';
import EditProfilePage from './pages/MyPage/EditProfilePage';
import UserQuestionPage from './pages/MyPage/UserQuestionPage/UserQuestionPage';
import EditQuestionPage from './pages/MyPage/UserQuestionPage/EditQuestionPage';
import Question from './pages/Questions/Question';
import DeleteProfile from './pages/MyPage/DeleteProfile';

function App() {
  return (
    <>
      <BackgroundLayout>
        <GlobalStyle />
        <Navbar />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/questions" element={<Questions />} />
          {/* 게시글 단건 조회 */}
          <Route path="/questions/:boardId" element={<Question />} />
          {/* 게시글 수정 */}
          <Route path="/questions/edit/:boardId" element={<Question />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/edit-mypage" element={<EditProfilePage />} />
          <Route path="/delete-account" element={<DeleteProfile />} />
          <Route path="/user-question" element={<UserQuestionPage />} />
          <Route path="/add-question" element={<AddQuestion />} />
          <Route
            path="/edit-question/:boardId"
            element={<EditQuestionPage />}
          />
          <Route
            path="/delete-question/:boardId"
            element={<DeleteQuestion />}
          />
        </Routes>
      </BackgroundLayout>
      <Footer />
    </>
  );
}

export default App;
