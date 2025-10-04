import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './Protected/ProtectedRoute';
import Header from './Header/Header';
import Nav from './Navigation/Nav';
import Home from './Home/Home';
import Students from './Students/Students';
import Student from './Student/Student';
import Find from './Find/Find';
import Update from './Update/Update';
import Delete from './Delete/Delete';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <div className="mainSection">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<ProtectedRoute>
              <Students />
            </ProtectedRoute>
            }
            />
            <Route path="/student" element={<ProtectedRoute>
              <Student />
            </ProtectedRoute>
            }
            />
            <Route path="/find" element={<ProtectedRoute>
              <Find />
            </ProtectedRoute>
            }
            />
            <Route path="/update" element={<ProtectedRoute>
              <Update />
            </ProtectedRoute>
            }
            />
            <Route path="/delete" element={<ProtectedRoute>
              <Delete />
            </ProtectedRoute>
            }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
