package ma.emsi.server.entities;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
import java.util.UUID;

/**
 * @author BarkouchMourad
 **/

@Data
@AllArgsConstructor
@Entity
public class PersonnelInfos {
    @Id
    private String id;
    private String nom;
    private String prenom;
    @Temporal(TemporalType.DATE)
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    private Date dateNaiss;
    private String address;

    public PersonnelInfos() {
        this.id = UUID.randomUUID().toString();
        this.nom = "---";
        this.prenom = "---";
        this.address = "---";
        this.dateNaiss = new Date();
    }
}
