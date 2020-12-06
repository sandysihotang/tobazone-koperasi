package io.github.sandy.model;

import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "maintenence_cost")
public class MaintenenceCost implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "id_koperasi")
    private Integer idKoperasi;

    @Column(name = "aktif")
    private Boolean aktif;

    @Column(name = "amount")
    private Integer amount;

    @Column(name = "gambar")
    private String gambar;

    @CreatedDate
    @Column(name = "start_date")
    private Date startDate;

    @CreatedDate
    @Column(name = "end_date")
    private Date endDate;

    public Integer getId() {
        return id;
    }

    public MaintenenceCost() {
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getIdKoperasi() {
        return idKoperasi;
    }

    public void setIdKoperasi(Integer idKoperasi) {
        this.idKoperasi = idKoperasi;
    }

    public Boolean getAktif() {
        return aktif;
    }

    public void setAktif(Boolean aktif) {
        this.aktif = aktif;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public String getGambar() {
        return gambar;
    }

    public void setGambar(String gambar) {
        this.gambar = gambar;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }
}
