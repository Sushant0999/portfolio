package com.app.portfolio.entity;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "Experience")
public class Experience {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer experienceId;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    private String jobTitle;
    private String companyName;
    private String location;
    private java.sql.Date startDate;
    private java.sql.Date endDate;
    private String description;

    // Getters and Setters
}

