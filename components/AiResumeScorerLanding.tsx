'use client';
import React, { useState, useRef } from 'react';
import {
  Upload,
  FileText,
  Star,
  CheckCircle,
  ArrowRight,
  Zap,
  Target,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  Eye,
  Download,
  Sparkles,
  Bot,
  Award,
  Clock
} from 'lucide-react';

// Define the type for analysis results
interface AnalysisResults {
  summary: string;
  skills_score: number;
  experience_score: number;
  overall_score: number;
  feedback: string;
}

const AiResumeScorerLanding = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [pastedContent, setPastedContent] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState<AnalysisResults | null>(null);
  const [activeTab, setActiveTab] = useState('upload');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setIsUploading(true);
      setUploadedFile(file);

      // Simulate upload progress
      setTimeout(() => {
        setIsUploading(false);
        setUploadComplete(true);
      }, 2000);
    }
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // Simulate analysis with dummy data
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisResults({
        summary: "John Doe is a Software Engineer with five years of experience in Python, Django, and AI development, but the resume lacks detail on specific accomplishments and projects.",
        skills_score: 7,
        experience_score: 3,
        overall_score: 5,
        feedback: "The resume is far too brief. It needs to quantify accomplishments within each role, showcasing specific projects, technologies used, and quantifiable results. Adding a skills section with a detailed list of proficiencies would significantly improve its impact."
      });
    }, 3000);
  };

  const faqData = [
    {
      question: "How accurate is the AI scoring?",
      answer: "Our AI uses advanced natural language processing and machine learning algorithms trained on thousands of successful resumes across various industries. The scoring accuracy is over 90% when compared to human recruiters."
    },
    {
      question: "What file formats do you support?",
      answer: "Currently, we support PDF files up to 10MB. You can also paste your resume content directly into the text area for instant analysis."
    },
    {
      question: "Is my resume data secure?",
      answer: "Absolutely! We use enterprise-grade encryption and don't store your resume content after analysis. Your privacy and data security are our top priorities."
    },
    {
      question: "How long does the analysis take?",
      answer: "Most resume analyses are completed within 30-60 seconds. Complex resumes with multiple sections may take up to 2 minutes."
    },
    {
      question: "What kind of feedback do I get?",
      answer: "You'll receive a comprehensive score, specific improvement suggestions, keyword optimization tips, formatting recommendations, and ATS compatibility insights."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="relative overflow-hidden bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AI Resume Scorer
                </h1>
                <p className="text-xs text-gray-500">Powered by Advanced AI</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">How It Works</a>
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Features</a>
              <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">FAQ</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 font-semibold text-sm mb-8 animate-bounce">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Resume Analysis
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Score Your Resume
              </span>
              <br />
              <span className="text-gray-900">Land Your Dream Job</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Get instant AI-powered feedback, professional scoring, and actionable insights
              to make your resume stand out from the crowd.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => {
                  const element = document.getElementById('upload-section');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="flex items-center px-8 py-4 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold text-lg hover:border-blue-300 hover:text-blue-600 transition-all duration-300">
                <Eye className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>
            
            <div className="mt-16 flex items-center justify-center space-x-8 text-gray-500">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 fill-current mr-2" />
                <span className="font-semibold">4.9/5 Rating</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span className="font-semibold">50k+ Resumes Analyzed</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 text-purple-500 mr-2" />
                <span className="font-semibold">95% Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our advanced AI analyzes your resume in three simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Upload Your Resume",
                description: "Simply upload your PDF resume or paste your content directly into our platform",
                icon: Upload,
                color: "from-blue-500 to-cyan-500"
              },
              {
                step: "02",
                title: "AI Analysis",
                description: "Our advanced AI analyzes structure, content, keywords, and ATS compatibility",
                icon: Bot,
                color: "from-purple-500 to-pink-500"
              },
              {
                step: "03",
                title: "Get Insights",
                description: "Receive detailed feedback, scoring, and actionable recommendations",
                icon: TrendingUp,
                color: "from-green-500 to-teal-500"
              }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl" style={{backgroundImage: `linear-gradient(to right, ${item.color.split(' ')[1]}, ${item.color.split(' ')[3]})`}}></div>
                <div className="relative p-8 rounded-2xl bg-white shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mr-4`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-6xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section id="upload-section" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Analyze Your Resume Now
            </h2>
            <p className="text-xl text-gray-600">Choose your preferred method to get started</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-xl p-2 shadow-lg border border-gray-200">
              <button
                onClick={() => setActiveTab('upload')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'upload'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <Upload className="w-4 h-4 inline mr-2" />
                Upload PDF
              </button>
              <button
                onClick={() => setActiveTab('paste')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'paste'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <FileText className="w-4 h-4 inline mr-2" />
                Paste Content
              </button>
            </div>
          </div>

          {/* Upload Tab */}
          {activeTab === 'upload' && (
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              {!uploadComplete ? (
                <div className="p-12">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    accept=".pdf"
                    className="hidden"
                  />
                  
                  {isUploading ? (
                    <div className="text-center">
                      <div className="relative w-24 h-24 mx-auto mb-6">
                        <div className="absolute inset-0 rounded-full border-4 border-blue-200"></div>
                        <div className="absolute inset-0 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>
                        <Upload className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Uploading Your Resume</h3>
                      <p className="text-gray-600">Please wait while we process your file...</p>
                      <div className="mt-6 w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full animate-pulse" style={{width: '70%'}}></div>
                      </div>
                    </div>
                  ) : (
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition-all duration-300 group"
                    >
                      <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Upload className="w-10 h-10 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">Drop your resume here</h3>
                      <p className="text-gray-600 mb-6">Or click to browse and select your PDF file</p>
                      <div className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-shadow">
                        Choose File
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="p-8">
                  <div className="flex items-center justify-between p-6 bg-green-50 rounded-xl border border-green-200">
                    <div className="flex items-center">
                      <CheckCircle className="w-8 h-8 text-green-600 mr-4" />
                      <div>
                        <h4 className="text-lg font-semibold text-green-900">{uploadedFile?.name}</h4>
                        <p className="text-green-600">Successfully uploaded • {(uploadedFile?.size ? (uploadedFile.size / 1024 / 1024).toFixed(2) : '0')} MB</p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setUploadedFile(null);
                        setUploadComplete(false);
                      }}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                  
                  <div className="mt-8 text-center">
                    <button
                      onClick={handleAnalyze}
                      disabled={isAnalyzing}
                      className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isAnalyzing ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                          Analyzing Resume...
                        </>
                      ) : (
                        <>
                          <Zap className="w-5 h-5 mr-2" />
                          Analyze Resume
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Paste Tab */}
          {activeTab === 'paste' && (
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
              <div className="mb-6">
                <label className="block text-lg font-semibold text-gray-900 mb-3">
                  Paste Your Resume Content
                </label>
                <textarea
                  value={pastedContent}
                  onChange={(e) => setPastedContent(e.target.value)}
                  placeholder="Copy and paste your resume content here..."
                  className="w-full h-64 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-700"
                />
              </div>
              
              <div className="text-center">
                <button
                  onClick={handleAnalyze}
                  disabled={!pastedContent.trim() || isAnalyzing}
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isAnalyzing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                      Analyzing Content...
                    </>
                  ) : (
                    <>
                      <Zap className="w-5 h-5 mr-2" />
                      Analyze Content
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ============== START: Improved Results Section ============== */}
      {analysisResults && (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold text-sm mb-4">
                <CheckCircle className="w-4 h-4 mr-2" />
                Analysis Complete
              </div>
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Your Resume Analysis Results
              </h2>
              <p className="text-xl text-gray-600">Here's how your resume performs and what you can improve</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {/* Left Column: Overall Score */}
              <div className="lg:col-span-1 bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 flex flex-col items-center justify-center text-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Overall Score</h3>
                <div className="relative w-48 h-48">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path
                      className="text-gray-200"
                      strokeWidth="3"
                      fill="none"
                      stroke="currentColor"
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-blue-600"
                      strokeWidth="3"
                      strokeDasharray={`${analysisResults.overall_score * 10}, 100`}
                      strokeLinecap="round"
                      fill="none"
                      stroke="currentColor"
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl font-extrabold text-gray-900">{analysisResults.overall_score}</span>
                    <span className="text-xl text-gray-500">/10</span>
                  </div>
                </div>
                <p className="mt-4 text-lg font-semibold text-gray-700">
                  {analysisResults.overall_score >= 8 ? 'Excellent' :
                   analysisResults.overall_score >= 6 ? 'Good' :
                   analysisResults.overall_score >= 4 ? 'Average' : 'Needs Work'}
                </p>
                <p className="text-gray-500 mt-1">Based on industry standards</p>
              </div>

              {/* Right Column: Score Breakdown */}
              <div className="lg:col-span-2 bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Score Breakdown</h3>
                <div className="space-y-6">
                  {[
                    { label: 'Skills & Keywords', score: analysisResults.skills_score, color: 'blue' },
                    { label: 'Experience & Impact', score: analysisResults.experience_score, color: 'purple' },
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-700">{item.label}</span>
                        <span className="font-bold text-lg text-gray-900">{item.score}/10</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className={`h-3 rounded-full ${
                            item.color === 'blue' ? 'bg-gradient-to-r from-blue-400 to-blue-600' : 'bg-gradient-to-r from-purple-400 to-purple-600'
                          }`}
                          style={{ width: `${item.score * 10}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Summary and Feedback Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Resume Summary</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">{analysisResults.summary}</p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Key Recommendations</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">{analysisResults.feedback}</p>
              </div>
            </div>
            
            {/* Action Items */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border border-orange-200 p-8 mb-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Zap className="w-6 h-6 text-orange-500 mr-3" />
                Priority Action Items
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Add Quantifiable Achievements</h5>
                    <p className="text-gray-600">Include specific numbers, percentages, and metrics to showcase your impact in previous roles.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Expand Technical Skills</h5>
                    <p className="text-gray-600">Create a dedicated skills section with relevant technologies and tools for your target role.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="text-center space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <Download className="w-5 h-5 mr-2" />
                  Download Report
                </button>
                <button
                  onClick={() => {
                    setAnalysisResults(null);
                    setUploadedFile(null);
                    setUploadComplete(false);
                    setPastedContent('');
                  }}
                  className="inline-flex items-center px-8 py-4 rounded-xl border-2 border-blue-600 text-blue-600 font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <Upload className="w-5 h-5 mr-2" />
                  Analyze Another Resume
                </button>
              </div>
              <p className="text-gray-500 text-sm">Want more detailed insights? Upgrade to Pro for advanced analytics and personalized tips.</p>
            </div>
          </div>
        </section>
      )}
      {/* ============== END: Improved Results Section ============== */}

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to create a winning resume that gets noticed
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "ATS Compatibility",
                description: "Ensure your resume passes Applicant Tracking Systems with our advanced compatibility check.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Zap,
                title: "Instant Scoring",
                description: "Get immediate feedback with detailed scoring across multiple resume criteria.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: TrendingUp,
                title: "Industry Insights",
                description: "Receive tailored suggestions based on your industry and target job positions.",
                color: "from-green-500 to-teal-500"
              },
              {
                icon: FileText,
                title: "Content Analysis",
                description: "Deep analysis of your resume content, structure, and keyword optimization.",
                color: "from-orange-500 to-red-500"
              },
              {
                icon: Clock,
                title: "Quick Results",
                description: "Get comprehensive feedback in under 60 seconds with our lightning-fast AI.",
                color: "from-indigo-500 to-purple-500"
              },
              {
                icon: Award,
                title: "Professional Tips",
                description: "Access expert advice and best practices from recruitment professionals.",
                color: "from-pink-500 to-rose-500"
              }
            ].map((feature, index) => (
              <div key={index} className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-white rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105"></div>
                <div className="relative p-8 rounded-2xl">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our AI Resume Scorer
            </p>
          </div>
          
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-6">
                    <div className="w-full h-px bg-gradient-to-r from-blue-200 to-purple-200 mb-4"></div>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    AI Resume Scorer
                  </h3>
                  <p className="text-xs text-gray-400">Powered by Advanced AI</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Transform your resume with AI-powered insights and land your dream job faster.
                Get professional feedback in seconds.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 AI Resume Scorer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AiResumeScorerLanding;