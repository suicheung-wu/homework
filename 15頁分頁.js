const backToTop = document.getElementById('backToTop');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
        
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // 顯示當前日期
        const currentDate = document.getElementById('current-date');
        const today = new Date();
        currentDate.textContent = today.toLocaleDateString('ja-JP', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            weekday: 'long'
        });
        
        // 小測驗功能
        const submitBtn = document.getElementById('submitQuiz');
        const quizResult = document.getElementById('quizResult');
        
        submitBtn.addEventListener('click', () => {
            const options = document.querySelectorAll('.quiz-option');
            let correctAnswers = 0;
            let totalQuestions = 0;
            
            options.forEach(option => {
                if (option.hasAttribute('data-correct')) {
                    totalQuestions++;
                    if (option.classList.contains('selected')) {
                        correctAnswers++;
                    }
                }
            });
            
            if (correctAnswers === totalQuestions) {
                quizResult.textContent = `恭喜！全部答對 (${correctAnswers}/${totalQuestions})`;
                quizResult.className = 'quiz-result correct';
            } else {
                quizResult.textContent = `答對了 ${correctAnswers} 題，共 ${totalQuestions} 題`;
                quizResult.className = 'quiz-result incorrect';
            }
            
            quizResult.style.display = 'block';
        });
        
        document.querySelectorAll('.quiz-option').forEach(option => {
            option.addEventListener('click', function() {
                // 清除同問題其他選項的選中狀態
                const questionDiv = this.closest('.quiz-options');
                questionDiv.querySelectorAll('.quiz-option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                
                this.classList.add('selected');
            });
        });