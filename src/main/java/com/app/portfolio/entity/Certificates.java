package com.app.portfolio.entity;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "Certificates")
public class Certificates {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer certificateId;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    private String title;
    private String organization;
    private java.sql.Date issueDate;
    private java.sql.Date expirationDate;

    // Getters and Setters
}

