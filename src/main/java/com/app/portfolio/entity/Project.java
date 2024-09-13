package com.app.portfolio.entity;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Data
@Table(name = "Projects")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer projectId;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    private String title;
    private String description;
    private String techStack;
    private String githubUrl;
    private String liveDemoUrl;
    private java.sql.Date startDate;
    private java.sql.Date endDate;

}

