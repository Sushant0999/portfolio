-- Create the Users Table
CREATE TABLE User (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    bio TEXT,
    profile_pic VARCHAR(255),
    location VARCHAR(100),
    linkedin_url VARCHAR(255),
    github_url VARCHAR(255)
);

-- Create the Projects Table
CREATE TABLE Project (
    project_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    tech_stack VARCHAR(255),
    github_url VARCHAR(255),
    live_demo_url VARCHAR(255),
    start_date DATE,
    end_date DATE,
    FOREIGN KEY (user_id) REFERENCES User(user_id) ON DELETE CASCADE
);

-- Create the Skills Table
CREATE TABLE Skills (
    skill_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    skill_name VARCHAR(100) NOT NULL,
    proficiency INT CHECK (proficiency >= 1 AND proficiency <= 5),
    FOREIGN KEY (user_id) REFERENCES User(user_id) ON DELETE CASCADE
);

-- Create the Experience Table
CREATE TABLE Experience (
    experience_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    job_title VARCHAR(100) NOT NULL,
    company_name VARCHAR(100),
    location VARCHAR(100),
    start_date DATE,
    end_date DATE,
    description TEXT,
    FOREIGN KEY (user_id) REFERENCES User(user_id) ON DELETE CASCADE
);

-- Create the Education Table
CREATE TABLE Education (
    education_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    degree VARCHAR(100) NOT NULL,
    institution VARCHAR(100),
    start_year YEAR,
    end_year YEAR,
    FOREIGN KEY (user_id) REFERENCES User(user_id) ON DELETE CASCADE
);

-- Create the Contact Table
CREATE TABLE Contact (
    contact_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    message TEXT NOT NULL,
    date_sent TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES User(user_id) ON DELETE CASCADE
);

-- Create the Certificates Table (Optional)
CREATE TABLE Certificates (
    certificate_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    title VARCHAR(255) NOT NULL,
    organization VARCHAR(255),
    issue_date DATE,
    expiration_date DATE,
    FOREIGN KEY (user_id) REFERENCES User(user_id) ON DELETE CASCADE
);
