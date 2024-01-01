-- Use the appropriate database
USE student_record_system;

-- Creating the Streams table
CREATE TABLE streams (
    stream_id INT AUTO_INCREMENT PRIMARY KEY,
    stream_name VARCHAR(100) NOT NULL
);

-- Creating the Students table
CREATE TABLE students (
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    date_of_birth DATE NOT NULL,
    stream_id INT
);

-- Creating the Marks table
CREATE TABLE marks (
    mark_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    subject VARCHAR(100) NOT NULL,
    score INT NOT NULL
);

-- Creating the Fees table
CREATE TABLE fees (
    fee_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    amount DECIMAL(10, 2) NOT NULL,
    due_date DATE NOT NULL,
    paid_date DATE
);

-- Creating the Scholarships table
CREATE TABLE scholarships (
    scholarship_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    scholarship_amount DECIMAL(10, 2) NOT NULL,
    granted_date DATE NOT NULL
);
-- Adding foreign key to students table
ALTER TABLE students
ADD CONSTRAINT fk_stream FOREIGN KEY (stream_id) REFERENCES streams(stream_id);

-- Adding foreign key to marks table
ALTER TABLE marks
ADD CONSTRAINT fk_student_marks FOREIGN KEY (student_id) REFERENCES students(student_id);

-- Adding foreign key to fees table
ALTER TABLE fees
ADD CONSTRAINT fk_student_fees FOREIGN KEY (student_id) REFERENCES students(student_id);

-- Adding foreign key to scholarships table
ALTER TABLE scholarships
ADD CONSTRAINT fk_student_scholarships FOREIGN KEY (student_id) REFERENCES students(student_id);
