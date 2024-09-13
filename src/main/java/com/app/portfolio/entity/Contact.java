package com.app.portfolio.entity;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "Contact")
public class Contact {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer contactId;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    private String name;
    private String email;
    private String message;
    private java.sql.Timestamp dateSent;

    // Getters and Setters
}

